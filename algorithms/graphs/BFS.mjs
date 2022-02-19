export default class BreadthFirstSearch {
  constructor(graph) {
    this.graph = graph;
    this.parents = new Array(graph.vertices + 1);
    this.discovered = new Array(graph.vertices + 1);
    this.processed = new Array(graph.vertices + 1);
  }

  search(root) {
    const queue = [];

    queue.push(root);
    this.discovered[root] = true;
    this.parents[root] = -1;

    while (queue.length) {
      let v = queue.shift();

      this.processVertexEarly?.(v);
      this.processed[v] = true;

      let node = this.graph.adjacencyList[v];
      while (node) {
        if (!this.processed[node.y] || this.graph.isDirected) {
          this.processEdge?.(v, node.y, node.weight);
        }

        if (!this.discovered[node.y]) {
          this.discovered[node.y] = true;
          queue.push(node.y);
          this.parents[node.y] = v;
        }
        node = node.next;
      }
      this.processVertextLate?.(v);
    }
  }
}
