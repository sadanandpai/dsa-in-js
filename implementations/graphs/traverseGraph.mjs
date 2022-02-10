import { Graph } from "../../data-structures/Graph.mjs";
import BFS from "../../algorithms/graphs/BFS.mjs";
import DFS from "../../algorithms/graphs/DFS.mjs";

const vertices = 6;
const g = new Graph(vertices, false);
g.insertEdge(1, 6);
g.insertEdge(1, 5);
g.insertEdge(1, 2);
g.insertEdge(2, 5);
g.insertEdge(2, 3);
g.insertEdge(3, 4);
g.insertEdge(4, 5);

const bfs = new BFS(g);
const dfs = new DFS(g);

bfs.processEdge = function (x, y) {
  console.log(x + "->" + y);
};

// dfs.processVertexEarly(v) {}
dfs.processEdge = function (x, y) {
  console.log(x + "->" + y);
};
// dfs.processVertextLate(v) {}

console.log("BFS edges");
bfs.search(1);

console.log("\nDFS edges");
dfs.search(1);
