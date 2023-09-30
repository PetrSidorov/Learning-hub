function visit(node) {
  console.log(node);
  for (let child of node.children) {
    visit(child);
  }
}

visit(document.documentElement);

function visit2(node) {
  var stack = [node];

  while (stack.length > 0) {
    var child = stack.pop();
    console.log(child);
    stack.push(...child.children); //   ..head children, ...body children, head title chidlren
  }
}

// visit2(document.documentElement);

function iterativeDFS(graph, start) {
  const visited = new Set(); // To keep track of visited nodes
  const stack = [start]; // Initialize the stack with the starting node

  while (stack.length > 0) {
    const node = stack.pop(); // Pop the top node from the stack
    if (!visited.has(node)) {
      console.log(node); // Process the node (e.g., print it)
      visited.add(node); // Mark the node as visited

      // Push unvisited neighbors onto the stack
      for (const neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
}
