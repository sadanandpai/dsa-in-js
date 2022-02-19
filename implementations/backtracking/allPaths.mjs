import Backtrack from "../../algorithms/graphs/Backtrack.mjs";
import { Graph } from "../../data-structures/Graph.mjs";

const vertices = 6;
const source = 1, destination = 3;
const g = new Graph(vertices, false);
g.insertEdges([
  [1, 2],
  [1, 3],
  [1, 4],
  [1, 5],
  [2, 6],
  [3, 6],
  [4, 6],
  [5, 6],
  [3, 4],
]);

const backtrack = new Backtrack();

backtrack.isSolution = (a, k) => a[k] === destination;

backtrack.constructCandidates = function (a, k) {
  if (k === 0) {
    return [source];
  }
  
  a.fill(undefined, k);
  const candidates = [];
  let edge = g.adjacencyList[a[k - 1]];
  while (edge) {
    if (!a.includes(edge.y)) {
      candidates.push(edge.y);
    }
    edge = edge.next;
  }

  return candidates;
};

backtrack.processSolution = function (a, k) {
  console.log(a.slice(0, k + 1));
};

console.log(`Paths from ${source} to ${destination}`);
backtrack.execute([], -1, 6);
