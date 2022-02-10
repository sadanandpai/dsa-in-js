import { Graph } from "../../data-structures/Graph.mjs";
import DFS from "../../algorithms/graphs/DFS.mjs";

const vertices = 7;
const g = new Graph(vertices, true);
g.insertEdges([[1, 2],[1, 3],[2, 3],[2, 4],[3, 5],[5, 4],[3, 6],[6, 5],[1, 7],[7, 6]]);

const dfs = new DFS(g);
const toposort = [];

dfs.processVertextLate = function (v) {
  toposort.unshift(v);
};

dfs.processEdge = function (x, y) {
  if (this.discovered[y] === !this.processed[y]) {
    console.log("Loop exists");
    this.finished = true;
  }
};

dfs.parents[1] = -1;
for (let i = 1; i < vertices; i++) {
  if (!dfs.discovered[i]) {
    dfs.search(i);
  }
}
console.log("Topological sort: " + toposort);
