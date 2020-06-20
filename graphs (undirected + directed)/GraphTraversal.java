package graphs;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.Stack;

public abstract class GraphTraversal {

	int vertices;
	boolean discovered[];
	boolean processed[];
	int parents[];
	boolean finished = false;
	int entryTime[], exitTime[], time = 0;

	GraphTraversal(int vertices) {
		this.vertices = vertices;
		discovered = new boolean[vertices + 1];
		processed = new boolean[vertices + 1];
		parents = new int[vertices + 1];
		entryTime = new int[vertices + 1];
		exitTime = new int[vertices + 1];
	}

	public void breadthFirstSearch(Graph graph, int vertex) {
		LinkedList<Integer> queue = new LinkedList<Integer>();
		queue.offer(vertex);
		discovered[vertex] = true;

		while (!queue.isEmpty()) {
			int x = queue.poll();

			processVertexEarly(x);
			processed[x] = true;

			Iterator<Edge> it = graph.adjacencyList.get(x).iterator();
			while (it.hasNext()) {
				int y = it.next().y;

				if (!processed[y] || graph.directed)
					processEdge(x, y);

				if (!discovered[y]) {
					queue.offer(y);
					discovered[y] = true;
					parents[y] = x;
				}
			}
			processVertexLate(x);
		}
	}

	public void depthFirstSearch(Graph graph, int vertex) {
		Stack<Integer> stack = new Stack<Integer>();
		stack.push(vertex);
		discovered[vertex] = true;

		while (!stack.isEmpty()) {
			int x = stack.pop();
			processVertexEarly(x);

			Iterator<Edge> it = graph.adjacencyList.get(x).iterator();
			while (it.hasNext()) {
				int y = it.next().y;
				parents[y] = x;

				if (!discovered[y]) {
					stack.push(y);
					processEdge(x, y);
					discovered[y] = true;
				} else if ((!processed[y] && parents[x] != y) || graph.directed)
					processEdge(x, y);

				if (finished)
					return;
			}
			processed[x] = true;
			processVertexLate(x);
		}
	}

	public void depthFirstSearchRecursive(Graph graph, int vertex) {
		discovered[vertex] = true;
		entryTime[vertex] = ++time;
		processVertexEarly(vertex);

		Iterator<Edge> it = graph.adjacencyList.get(vertex).iterator();
		while (it.hasNext()) {
			int y = it.next().y;

			if (!discovered[y]) {
				parents[y] = vertex;
				processEdge(vertex, y);
				depthFirstSearchRecursive(graph, y);
			} else if ((!processed[y] && parents[vertex] != y) || graph.directed)
				processEdge(vertex, y);

			if (finished)
				return;
		}
		exitTime[vertex] = ++time;
		processed[vertex] = true;
		processVertexLate(vertex);
	}

	abstract public void processVertexEarly(int x);

	abstract public void processEdge(int x, int y);

	abstract public void processVertexLate(int x);

}