package graphs;

public class ShortestDistance extends GraphTraversal{
	
	ShortestDistance(int vertices) {
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

		ShortestDistance bfs = new ShortestDistance(vertices);
		bfs.breadthFirstSearch(graph, 6);
		
		System.out.println("Shortest distance from 1 to 4");
		bfs.findPath(6, 4);
	}
	
	@Override
	public void processVertexEarly(int x) {
		
	}
	
	@Override
	public void processEdge(int x, int y){
		
	}
	
	@Override
	public void processVertexLate(int y){
		
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
