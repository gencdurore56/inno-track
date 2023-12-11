/*
   Filename: complex_code.js
   Description: This code demonstrates a complex algorithm to find the shortest path in a graph using Dijkstra's algorithm.
                It uses an adjacency matrix to represent the graph and returns the shortest path between two given vertices.
*/


// Class representing a graph
class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.matrix = [];
    for (let i = 0; i < vertices; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < vertices; j++) {
        this.matrix[i][j] = 0;
      }
    }
  }

  // Add edge to the graph
  addEdge(source, destination, weight) {
    this.matrix[source][destination] = weight;
    this.matrix[destination][source] = weight;
  }

  // Dijkstra's algorithm to find the shortest path
  dijkstra(source, destination) {
    let minDistance = Array(this.vertices).fill(Infinity);
    let visited = Array(this.vertices).fill(false);
    let previous = Array(this.vertices).fill(-1);
    minDistance[source] = 0;

    for (let i = 0; i < this.vertices - 1; i++) {
      let minIndex = this.getMinDistance(minDistance, visited);
      visited[minIndex] = true;

      for (let j = 0; j < this.vertices; j++) {
        if (!visited[j] && this.matrix[minIndex][j] !== 0 && 
            minDistance[minIndex] !== Infinity &&
            minDistance[minIndex] + this.matrix[minIndex][j] < minDistance[j]) {
          minDistance[j] = minDistance[minIndex] + this.matrix[minIndex][j];
          previous[j] = minIndex;
        }
      }
    }
    
    return this.constructPath(destination, previous);
  }

  // Helper method to get the vertex with the minimum distance
  getMinDistance(distance, visited) {
    let min = Infinity;
    let minIndex = -1;

    for (let i = 0; i < this.vertices; i++) {
      if (!visited[i] && distance[i] <= min) {
        min = distance[i];
        minIndex = i;
      }
    }

    return minIndex;
  }

  // Helper method to construct the shortest path
  constructPath(destination, previous) {
    let path = [];
    let currentVertex = destination;

    while (currentVertex !== -1) {
      path.unshift(currentVertex);
      currentVertex = previous[currentVertex];
    }

    return path;
  }
}

// Create a new graph
let graph = new Graph(6);

// Add edges to the graph
graph.addEdge(0, 1, 4);
graph.addEdge(0, 2, 2);
graph.addEdge(1, 2, 1);
graph.addEdge(1, 3, 5);
graph.addEdge(2, 3, 8);
graph.addEdge(2, 4, 10);
graph.addEdge(3, 4, 2);
graph.addEdge(3, 5, 6);
graph.addEdge(4, 5, 3);

// Find the shortest path between two vertices
let source = 0;
let destination = 4;
let shortestPath = graph.dijkstra(source, destination);

console.log(`Shortest path from vertex ${source} to vertex ${destination}: ${shortestPath}`);
