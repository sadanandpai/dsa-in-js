class Edge {
  constructor(y, weight) {
    this.y = y;
    this.weight = weight;
    this.next = null;
  }

  add(e) {
    this.next = e;
  }

  hasNext() {
    return this.next !== null;
  }
}

export class Graph {
  constructor(vertices, isDirected) {
    this.vertices = vertices;
    this.degree = new Array(vertices + 1);
    this.isDirected = isDirected;
    this.edges = 0;
    this.adjacencyList = [];
  }

  insertEdges(edges) {
    edges.forEach((edge) => this.insertEdge(edge[0], edge[1], edge[2]));
  }

  insertEdge(x, y, weight = 1) {
    this.addEdge(x, y, weight);

    if (!this.isDirected) {
      this.addEdge(y, x, weight);
    }

    this.edges++;
  }

  addEdge(vertex1, vertex2, weight) {
    const list = this.adjacencyList[vertex1];
    const e = new Edge(vertex2, weight);

    if (list) {
      e.next = list;
    }
    this.adjacencyList[vertex1] = e;
    this.degree[vertex1]++;
  }

  printGraph() {
    for (let i = 1; i <= this.vertices; i++) {
      let edge = this.adjacencyList[i];

      let str = i;
      while (edge) {
        str += "->" + edge.y;
        edge = edge.next;
      }
      return str;
    }
  }

  displayDegree() {
    for (let i = 0; i < this.degree.length; i++) {
      console.log("Degree of node " + i + ": " + this.degree[i]);
    }
  }
}
