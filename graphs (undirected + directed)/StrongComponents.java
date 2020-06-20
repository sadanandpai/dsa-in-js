package graphs.revision;

import java.util.Stack;

public class StrongComponents extends GraphTraversal {

	public Stack<Integer> stack;
	public int low[];
	public int scc[];
	public int componentsFound = 0;
	
	StrongComponents(int vertices) {
		super(vertices);
		stack = new Stack<Integer>();
		low = new int[vertices + 1]; /* oldest vertex surely in component of v */
		scc = new int[vertices + 1]; /* strong component number for each vertex */
	}

	public static void main(String[] args) {
		int vertices = 8;
		Graph graph = new Graph(vertices, true);

		graph.insertEdge(1, 2);
		graph.insertEdge(2, 3);
		graph.insertEdge(3, 1);
		graph.insertEdge(2, 4);
		graph.insertEdge(2, 5);

		graph.insertEdge(4, 1);
		graph.insertEdge(4, 8);
		graph.insertEdge(4, 6);
		graph.insertEdge(8, 6);

		graph.insertEdge(5, 6);
		graph.insertEdge(6, 7);
		graph.insertEdge(7, 5);

		StrongComponents dfs = new StrongComponents(vertices);
		for (int i = 1; i <= vertices; i++) {
			dfs.low[i] = i;
			dfs.scc[i] = -1;
		}

		for (int i = 1; i <= vertices; i++) {
			if (!dfs.discovered[i]) {
				dfs.depthFirstSearchRecursive(graph, i);
			}
		}
		
		for (int i = 1; i <= vertices; i++) {
			System.out.println("vertex " + i + " belongs to component " + dfs.scc[i]);
		}
	}

	@Override
	public void processVertexEarly(int x) {
		stack.push(x);
	}

	@Override
	public void processEdge(int x, int y) {
		String type = edgeClassification(x, y);
		if (type.equals("BACK")) {
			if (entryTime[y] < entryTime[low[x]])
				low[x] = y;
		}
		if (type.equals("CROSS")) {
			if (scc[y] == -1)
				if (entryTime[y] < entryTime[low[x]])
					low[x] = y;
		}
	}

	@Override
	public void processVertexLate(int x) {
		if (low[x] == x)
			popComponent(x);
		
		if (parents[x] > 0)
			if (entryTime[low[x]] < entryTime[low[parents[x]]])
				low[parents[x]] = low[x];
	}

	private void popComponent(int x) {
		int t;
		componentsFound++;;
		scc[x] = componentsFound;
		while (!stack.isEmpty()) {
			t = stack.pop();
			if(t != x)
				scc[t] = componentsFound;
			else break;
		}
	}

	public String edgeClassification(int x, int y) {
		if (parents[y] == x)
			return "TREE";
		if (discovered[y] && !processed[y])
			return "BACK";
		if (processed[y] && (entryTime[y] > entryTime[x]))
			return "FORWARD";
		if (processed[y] && (entryTime[y] < entryTime[x]))
			return "CROSS";

		System.out.printf("Warning: unclassified edge (%d,%d)\n", x, y);
		return "";
	}
}
