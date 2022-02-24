import { Graph } from "../../data-structures/Graph.mjs";

function prim(g, start) {
  const isInTree = new Array(g.vertices + 1);
  const distance = new Array(g.vertices + 1).fill(Number.MAX_SAFE_INTEGER);
  const parents = new Array(g.vertices + 1);
  let minSpanDistance = 0;

  distance[start] = 0;
  parents[start] = -1;
  let v = start;
  while (!isInTree[v]) {
    isInTree[v] = true;

    let p = g.adjacencyList[v];
    while (p !== null) {
      let w = p.y;
      let weight = p.weight;

      if (distance[w] > weight && !isInTree[w]) {
        distance[w] = weight;
        parents[w] = v;
      }
      p = p.next;
    }

    v = 1;
    let dist = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= g.vertices; i++) {
      if (!isInTree[i] && dist > distance[i]) {
        dist = distance[i];
        v = i;
      }
    }

    if (v !== start) {
      minSpanDistance += dist;
      console.log('Edge: ' + parents[v] + '->' + v);
    }
  }

  return minSpanDistance;
}

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
const minSpanDistance = prim(g, 1);
console.log("Minimum spanning distance: " + minSpanDistance);
