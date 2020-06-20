package graphs.revision;

public class DFSCycleDetection extends GraphTraversal {

	DFSCycleDetection(int vertices) {
		super(vertices);
	}

	public static void main(String[] args) {
		int vertices = 6;
		Graph graph = new Graph(vertices, false);

		graph.insertEdge(1, 2);
		graph.insertEdge(1, 5);
		graph.insertEdge(1, 6);

		graph.insertEdge(2, 5);
		graph.insertEdge(2, 3);

		graph.insertEdge(3, 4);
		graph.insertEdge(4, 5);

		DFSCycleDetection dfs = new DFSCycleDetection(vertices);

		dfs.depthFirstSearchRecursive(graph, 1);
	}

	public void processVertexEarly(int vertex) {

	}

	public void processEdge(int x, int y) {
		if (discovered[y] && (parents[x] != y)) {
			System.out.println("Cycle from " + y + " to " + x);
			findPath(y, x);
			finished = true; // comment it to get all the cycles
		}
	}

	public void processVertexLate(int vertex) {

	}

	public void findPath(int x, int y) {
		if (x == y || y == 0) {
			System.out.println(y);
			return;
		} else {
			System.out.print(y + "->");
			findPath(x, parents[y]);
		}
	}
}