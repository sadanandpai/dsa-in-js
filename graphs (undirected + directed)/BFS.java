package graphs.revision;

public class BFS extends GraphTraversal{
	
	BFS(int vertices) {
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

		BFS bfs = new BFS(vertices);
		System.out.println("Breadth First Search of the graph");
		bfs.breadthFirstSearch(graph);
	}
	
	@Override
	public void processVertexEarly(int x) {
		System.out.print(x + " ");
	}
	
	@Override
	public void processEdge(int x, int y){
		
	}
	
	@Override
	public void processVertexLate(int y){
		
	}

}
