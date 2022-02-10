import { Graph } from "../../data-structures/Graph.mjs";
import BFS from "../../algorithms/graphs/BFS.mjs";
import DFS from "../../algorithms/graphs/DFS.mjs";

const vertices = 6;
const g = new Graph(vertices, false);
g.insertEdges([[1, 6],[1, 5],[1, 2],[2, 5],[2, 3],[3, 4],[4, 5]]);

const bfs = new BFS(g);
const dfs = new DFS(g);

bfs.processEdge = function (x, y) {
  console.log(x + "->" + y);
};

dfs.processEdge = function (x, y) {
  console.log(x + "->" + y);
};

console.log("BFS edges");
bfs.search(1);

console.log("\nDFS edges");
dfs.search(1);
