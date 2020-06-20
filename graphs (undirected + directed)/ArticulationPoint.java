package graphs.revision;

public class ArticulationPoint extends GraphTraversal {

	int reachableAncestor[];
	int treeOutDegree[];

	ArticulationPoint(int vertices) {
		super(vertices);
		reachableAncestor = new int[vertices + 1];
		treeOutDegree = new int[vertices + 1];
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

		ArticulationPoint dfs = new ArticulationPoint(vertices);

		dfs.depthFirstSearchRecursive(graph, 1);

	}

	public void processVertexEarly(int vertex) {
		reachableAncestor[vertex] = vertex;
	}

	public void processEdge(int x, int y) {
		String type = edgeClassification(x, y);
		if (type.equals("TREE"))
			treeOutDegree[x] = treeOutDegree[x] + 1;
		if (type.equals("BACK"))
			reachableAncestor[x] = y;
	}

	public void processVertexLate(int vertex) {
		exitTime[vertex] = ++time;

		boolean root;
		int timeV;
		int timeParent;

		if (parents[vertex] < 1) {
			if (treeOutDegree[vertex] > 1)
				System.out.printf("root articulation vertex: %d \n", vertex);
			return;
		}
		root = (parents[parents[vertex]] < 1); /* test if parent[v] is root */
		if (!root) {
			if (reachableAncestor[vertex] == parents[vertex]) {
				System.out.printf("parent articulation vertex: %d \n", parents[vertex]);
			}
			if (reachableAncestor[vertex] == vertex) {
				System.out.printf("bridge articulation vertex: %d \n", parents[vertex]);
				if (treeOutDegree[vertex] > 0) /* test if v is not a leaf */
					System.out.printf("bridge articulation vertex: %d \n", vertex);
			}
		}
		timeV = entryTime[reachableAncestor[vertex]];
		timeParent = entryTime[reachableAncestor[parents[vertex]]];
		if (timeV < timeParent)
			reachableAncestor[parents[vertex]] = reachableAncestor[vertex];
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