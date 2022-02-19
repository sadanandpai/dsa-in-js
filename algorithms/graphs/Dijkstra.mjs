import { Graph } from "../../data-structures/Graph.mjs";
import Heap from "@datastructures-js/priority-queue";

const vertices = 6;
const g = new Graph(vertices, false);
g.insertEdges([
  [1, 6, 2],
  [1, 5, 1],
  [1, 2, 3],
  [2, 5, 6],
  [2, 3, 3],
  [3, 4, 5],
  [4, 5, 4],
]);

const minPQ = new Heap.PriorityQueue({
  compare: (e1, e2) => {
    if (e1.rank > e2.rank) return 1;
    if (e1.rank < e2.rank) return -1;
  },
});

const distance = dijkstra(g, 1);
console.log(distance);

function dijkstra(g, start) {
  const distance = new Array(g.vertices + 1).fill(Number.MAX_SAFE_INTEGER);
  const discovered = new Array(g.vertices + 1).fill(false);
  const isRelaxed = new Array(g.vertices + 1).fill(false);

  distance[start] = 0;
  let node = { vertex: start, rank: 0 };
  minPQ.enqueue(node);

  while (minPQ.size()) {
    const node = minPQ.dequeue();
    start = node.vertex;

    if(isRelaxed[start]) continue;

    let edge = g.adjacencyList[start];
    while (edge) {
      if (!isRelaxed[edge.y]) {
        if (distance[edge.y] > distance[start] + edge.weight) {
          distance[edge.y] = distance[start] + edge.weight;
        }

        if (!discovered[edge.y]) {
          minPQ.enqueue({ vertex: edge.y, rank: distance[edge.y] });
          discovered[edge.y] = true;
        }
      }
      edge = edge.next;
    }

    isRelaxed[start] = true;
  }

  return distance;
}
