export default class DepthFirstSearch {
  time = 0;
  finished = false;

  constructor(graph) {
    this.graph = graph;
    this.parents = new Array(graph.vertices + 1);
    this.discovered = new Array(graph.vertices + 1);
    this.processed = new Array(graph.vertices + 1);
    this.entryTime = new Array(graph.vertices + 1);
    this.exitTime = new Array(graph.vertices + 1);
  }

  search(v) {
    if (this.finished) return;

    this.discovered[v] = true;
    this.time = this.time + 1;
    this.entryTime[v] = this.time;

    this.processVertexEarly?.(v);

    let node = this.graph.adjacencyList[v];
    while (node) {
      if (!this.discovered[node.y]) {
        this.parents[node.y] = v;
        this.processEdge?.(v, node.y);
        this.search(node.y);
      } else if ((!this.processed[node.y] && this.parents[v] !== node.y) || this.graph.isDirected) {
        this.processEdge?.(v, node.y);
      }
      if (this.finished) return;
      node = node.next;
    }

    this.processVertextLate?.(v);

    this.time = this.time + 1;
    this.exitTime[v] = this.time;
    this.processed[v] = true;
  }
}