package graphs;

public class DFS extends GraphTraversal{

	DFS(int vertices) {
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

		DFS dfs = new DFS(vertices);
		System.out.println("Depth First Search of the graph");
		dfs.depthFirstSearchRecursive(graph, 1);
		
		System.out.println();
		dfs.displayNodeTime();
	}
	
	@Override
	public void processVertexEarly(int vertex) {
		System.out.print(vertex + " ");
	}
	
	@Override
	public void processEdge(int vertex, int nextVertex){

	}
	
	@Override
	public void processVertexLate(int vertex){
	}
	
	public void displayNodeTime() {
		System.out.println();
		for (int i = 1; i < entryTime.length; i++) {
			System.out.println("Node time " + i + ": " + entryTime[i] + "-" + exitTime[i]);
		}
	}

}
