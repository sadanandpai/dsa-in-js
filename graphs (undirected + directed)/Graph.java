package graphs;

import java.util.*;

class Edge{
	int y;
	int weight;
	
	Edge(int y, int weight){
		this.y = y;
		this.weight = weight;
	}
	
	public String toString() {
		return String.valueOf(y);
	}
}

public class Graph {
	
	int vertices;
	int degree[];
	boolean directed;
	int edges;
	ArrayList<LinkedList<Edge>> adjacencyList;

	public Graph(int vertices, boolean directed) {
		this.vertices = vertices;
		this.degree = new int[vertices + 1];
		this.directed = directed;
		this.edges = 0;
		this.adjacencyList = new ArrayList<LinkedList<Edge>>();

		for (int i = 0; i <= vertices; i++)
			this.adjacencyList.add(new LinkedList<Edge>());
	}
	
	public void insertEdge(int x, int y) {
		insertEdge(x, y, 1);
	}

	public void insertEdge(int x, int y, int weight) {
		adjacencyList.get(x).add(new Edge(y, weight));
		degree[x]++;

		if (!directed) {
			adjacencyList.get(y).add(new Edge(x, weight));
			degree[y]++;
		}

		edges++;
	}

	public void printGraph() {
		for (int i = 1; i <= vertices; i++) {
			Iterator<Edge> it = adjacencyList.get(i).iterator();
			
			System.out.print(i);
			while (it.hasNext())
				System.out.print("->" + it.next());
			System.out.println();
		}
	}
	
	public void displayDegree() {
		for (int i = 0; i < degree.length; i++) {
			System.out.println("Degree of node " + i + ": " + degree[i]);
		}
	}


}
