import { Graph } from "../../data-structures/Graph.mjs";
import DFS from "../../algorithms/graphs/DFS.mjs";

const vertices = 6;
const g = new Graph(vertices, false);
g.insertEdges([[1, 6],[1, 5],[1, 2],[2, 5],[2, 3],[3, 4],[4, 5]]);

const dfs = new DFS(g);

dfs.processVertexEarly = function (v) {
  reachableAncestor[v] = v;
};

dfs.processEdge = function (x, y) {
  if (this.parents[y] == x) {
    treeOutDegree[x] = treeOutDegree[x] + 1;
  }

  if (this.discovered[y] && !this.processed[y] && this.parents[x] !== y) {
    if (this.entryTime[y] < this.entryTime[reachableAncestor[x]]) {
      reachableAncestor[x] = y;
    }
  }
};

dfs.processVertextLate = function (v) {
  let isRoot;
  let timeV;
  let timeParent;

  if (this.parents[v] < 1) {
    if (treeOutDegree[v] > 1) {
      console.log(`root articulation vertex: ${v}`);
    }
    return;
  }

  isRoot = (this.parents[this.parents[v]] < 1);

  if (!isRoot) {
    if (reachableAncestor[v] == this.parents[v]) {
      console.log(`parent articulation vertex: ${this.parents[v]}`);
    }
    if (reachableAncestor[v] == v) {
      console.log(`bridge articulation vertex: ${this.parents[v]}`);
      if (treeOutDegree[v] > 0)
        console.log(`bridge articulation vertex: ${v}`);
    }
  }
  timeV = this.entryTime[reachableAncestor[v]];
  timeParent = this.entryTime[reachableAncestor[this.parents[v]]];
  if (timeV < timeParent) reachableAncestor[this.parents[v]] = reachableAncestor[v];
};

const reachableAncestor = new Array(vertices + 1);
const treeOutDegree = new Array(vertices + 1).fill(0);
dfs.parents[1] = -1;
dfs.search(1);
