import { Graph } from "../../data-structures/Graph.mjs";
import BFS from "../../algorithms/graphs/BFS.mjs";

const vertices = 6;
const parents = Array.from(new Array(vertices + 1), (_, idx) => idx);
const size = new Array(vertices + 1).fill(1);

const find = (x) => (parents[x] === x ? x : find(parents[x]));
const union = (s1, s2) => {
  let r1 = find(s1);
  let r2 = find(s2);

  if (r1 == r2) return;

  if (size[r1] >= size[r2]) {
    size[r1] = size[r1] + size[r2];
    parents[r2] = r1;
  } else {
    size[r2] = size[r1] + size[r2];
    parents[r1] = r2;
  }
};

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
const bfs = new BFS(g, 1);

const edges = [];
bfs.processEdge = function (x, y, weight) {
  edges.push({ x, y, weight });
};
bfs.search(1);
edges.sort((a, b) => a.weight - b.weight);

let dist = 0;
for (let i = 0; i < edges.length; i++) {
  if(find(edges[i].x) !== find(edges[i].y)){
    dist += edges[i].weight;
    console.log(`Edge: ${edges[i].x} -> ${edges[i].y}`);
    union(edges[i].x, edges[i].y);
  }
}

console.log('Minimum spanning distance: ' + dist);