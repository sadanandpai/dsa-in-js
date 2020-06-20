package graphs.revision;

import java.util.Stack;

public class TopologicalSort extends GraphTraversal {

	Stack<Integer> topoStack = new Stack<Integer>();

	TopologicalSort(int vertices) {
		super(vertices);
	}

	public static void main(String[] args) {
		int vertices = 7;
		Graph graph = new Graph(vertices, true);

		graph.insertEdge(1, 2);
		graph.insertEdge(1, 3);
		
		graph.insertEdge(2, 3);
		graph.insertEdge(2, 4);
		
		graph.insertEdge(3, 5);
		graph.insertEdge(3, 6);
		
		graph.insertEdge(5, 4);
		graph.insertEdge(6, 5);
		
		graph.insertEdge(7, 1);
		graph.insertEdge(7, 6);
		
		TopologicalSort dfs = new TopologicalSort(vertices);
		
		for (int i = 1; i <= vertices; i++)
			if (!dfs.discovered[i])
				dfs.depthFirstSearchRecursive(graph, i);
		
		dfs.displayTopoSort();
	}
	
	public void processVertexEarly(int vertex) {
		
	}

	public void processEdge(int vertex, int nextVertex) {
		
	}

	public void processVertexLate(int vertex) {
		topoStack.push(vertex);
	}
	
	public void displayTopoSort() {
		while(!topoStack.isEmpty())
			System.out.print(topoStack.pop() + " ");
		
	}

}