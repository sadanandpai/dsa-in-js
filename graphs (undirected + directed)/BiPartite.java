package graphs.revision;

public class BiPartite extends GraphTraversal{
	
	int color[];
	boolean bipartite = true;
	
	BiPartite(int vertices) {
		super(vertices);
		color = new int[vertices+1];
	}

	public static void main(String[] args) {
		int vertices = 6;
		Graph graph = new Graph(vertices, false);

		graph.insertEdge(1, 2);
		graph.insertEdge(1, 4);
		graph.insertEdge(1, 6);

		graph.insertEdge(2, 3);
		graph.insertEdge(2, 5);
		
		graph.insertEdge(3, 4);
		graph.insertEdge(3, 6);
		
		graph.insertEdge(4, 5);
		graph.insertEdge(5, 6);
		
		BiPartite bfs = new BiPartite(vertices);
		
		bfs.color[1] = 1;
		bfs.breadthFirstSearch(graph, 1);
		
		if(bfs.bipartite)
			System.out.println("Graph is bipartite");
			
	}
	
	public void processVertexEarly(int vertex) {
	
	}
	
	@Override
	public void processEdge(int vertex, int nextVertex){
		if(color[vertex] == color[nextVertex]) {
			bipartite = false;
			System.out.println("Graph is not bipartite due to " + vertex + " and " + nextVertex);
		}
		color[nextVertex] = color[vertex] == 1 ? 2: 1;
	}
	
	@Override
	public void processVertexLate(int vertex){
		
	}
}
