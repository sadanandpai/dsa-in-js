package graphs.revision;

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

	public void breadthFirstSearch(Graph graph) {
		LinkedList<Integer> queue = new LinkedList<Integer>();
		queue.offer(1);
		discovered[1] = true;

		while (!queue.isEmpty()) {
			int vertex = queue.poll();

			processVertexEarly(vertex);
			processed[vertex] = true;

			Iterator<Edge> it = graph.adjacencyList.get(vertex).iterator();
			while (it.hasNext()) {
				int nextVertex = it.next().y;

				if (!processed[nextVertex] || graph.directed)
					processEdge(vertex, nextVertex);

				if (!discovered[nextVertex]) {
					queue.offer(nextVertex);
					discovered[nextVertex] = true;
					parents[nextVertex] = vertex;
				}
			}
			processVertexLate(vertex);
		}
	}

	public void depthFirstSearch(Graph graph) {
		Stack<Integer> stack = new Stack<Integer>();
		stack.push(1);
		discovered[1] = true;

		while (!stack.isEmpty()) {
			int vertex = stack.pop();
			processVertexEarly(vertex);

			Iterator<Edge> it = graph.adjacencyList.get(vertex).iterator();
			while (it.hasNext()) {
				int nextVertex = it.next().y;
				parents[nextVertex] = vertex;

				if (!discovered[nextVertex]) {
					stack.push(nextVertex);
					processEdge(vertex, nextVertex);
					discovered[nextVertex] = true;
				} else if ((!processed[nextVertex] && parents[vertex] != nextVertex) || graph.directed)
					processEdge(vertex, nextVertex);

				if (finished)
					return;
			}
			processed[vertex] = true;
			processVertexLate(vertex);
		}
	}

	public void depthFirstSearchRecursive(Graph graph, int vertex) {
		discovered[vertex] = true;
		entryTime[vertex] = ++time;
		processVertexEarly(vertex);

		Iterator<Edge> it = graph.adjacencyList.get(vertex).iterator();
		while (it.hasNext()) {
			int nextVertex = it.next().y;

			if (!discovered[nextVertex]) {
				parents[nextVertex] = vertex;
				processEdge(vertex, nextVertex);
				depthFirstSearchRecursive(graph, nextVertex);
			} else if ((!processed[nextVertex] && parents[vertex] != nextVertex) || graph.directed)
				processEdge(vertex, nextVertex);

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