class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
    this.graph = {};
  }
  add_vertex(v) {
    this.AdjList.set(v, []);
  }
  add_edge(v, e) {
    this.AdjList.get(v).push(e);
    // this.AdjList.get(e).push(v);
  }
  buildGraph(edges) {
    for (let edge of edges) {
      let [a, b] = edge;
      if (!(a in this.graph)) this.graph[a] = [];
      if (!(b in this.graph)) this.graph[b] = [];
      this.graph[a].push(b);
      this.graph[b].push(a);
    }
  }
  hasPathUndirected(src, dest, visited) {
    if (src in this.graph === false) return "Node not in the graph";
    if (src === dest) return true;
    let stack = [src];
    while (stack.length) {
      let curr = stack.pop();
      if (visited.has(curr)) continue;
      visited.add(curr);
      if (curr === dest) return true;
      for (let neighbor of this.graph[curr]) {
        stack.unshift(neighbor);
      }
    }
    return false;
  }
  conuntConnectedComponents(src, visited) {
    if (src in this.graph === false) return "Node not in the graph";
    let stack = [src],
      count = 1;
    while (stack.length) {
      let curr = stack.pop();
      if (visited.has(curr)) continue;
      count++;
      visited.add(curr);
      for (let neighbor of this.graph[curr]) {
        stack.unshift(neighbor);
        visited.add(neighbor);
      }
    }
    return count;
  }
  largestComponent(src, visited) {
    if (src in this.graph === false) return "Node not in the graph";
    let stack = [src],
      max = 0,
      count = 1;
    while (stack.length) {
      count = 1;
      let curr = stack.pop();
      if (visited.has(curr)) continue;

      visited.add(curr);
      for (let neighbor of this.graph[curr]) {
        stack.unshift(neighbor);
        visited.add(neighbor);
        count++;
      }
      console.log("stack ", stack);
      if (count > max) max = count;
    }
    return max;
  }
  shortestPath(src, dest) {
    let visited = new Set([src]);
    let queue = [[src, 0]];
    while (queue.length) {
      const [node, distance] = queue.shift();
      console.log(node, distance);
      if (node === dest) return distance;
      for (let neighbor of this.graph[node]) {
        if (visited.has(neighbor) === false) {
          visited.add(neighbor);
          queue.push([neighbor, distance + 1]);
        }
      }
    }
    return false;
  }
  islandCount(grid) {
    let visited = new Set();
    let count = 0;
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
        if (this.explore(grid, r, c, visited) == true) count++;
      }
    }
    return count;
  }
  explore(grid, r, c, visited) {
    const rowInBound = 0 <= r && r < grid.length;
    const colInBound = 0 <= c && c < grid[0].length;
    if (rowInBound == false || colInBound == false) return false;
    // console.log(grid, r, c, visited, "---", rowInBound, colInBound);
    if (grid[r][c] === "W") return false;

    let pos = r + "," + c;
    if (visited.has(pos)) return false;
    visited.add(pos);

    this.explore(grid, r - 1, c, visited);
    this.explore(grid, r + 1, c, visited);
    this.explore(grid, r, c - 1, visited);
    this.explore(grid, r, c + 1, visited);

    return true;
  }
  numOflandCount(grid) {
    let visited = new Set();
    let count = 0;
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
        if (explore(grid, r, c, visited) == true) count++;
      }
    }
    return count;
  }
  explore(grid, r, c, visited) {
    const rowInBound = 0 <= r && r < grid.length;
    const colInBound = 0 <= c && c < grid[0].length;
    if (rowInBound == false || colInBound == false) return false;
    // console.log(grid, r, c, visited, "---", rowInBound, colInBound);
    if (grid[r][c] === "W") return false;

    let pos = r + "," + c;
    if (visited.has(pos)) return false;
    visited.add(pos);

    explore(grid, r - 1, c, visited);
    explore(grid, r + 1, c, visited);
    explore(grid, r, c - 1, visited);
    explore(grid, r, c + 1, visited);

    return true;
  }
  minSizeIslandCount(grid) {
    let visited = new Set();
    let minSize = Infinity;
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
        let size = this.minSizeExplore(grid, r, c, visited);
        if (size < minSize) minSize = size;
      }
    }
    return minSize;
  }
  minSizeExplore(grid, r, c, visited) {
    const rowInBound = 0 <= r && r < grid.length;
    const colInBound = 0 <= c && c < grid[0].length;
    if (rowInBound == false || colInBound == false) return 0;
    // console.log(grid, r, c, visited, "---", rowInBound, colInBound);
    if (grid[r][c] === "W") return 0;

    let pos = r + "," + c;
    if (visited.has(pos)) return 0;
    visited.add(pos);

    let size = 0;
    size += this.minSizeExplore(grid, r - 1, c, visited);
    size += this.minSizeExplore(grid, r + 1, c, visited);
    size += this.minSizeExplore(grid, r, c - 1, visited);
    size += this.minSizeExplore(grid, r, c + 1, visited);

    return size;
  }
  //   print_graph() {
  //     var keys = this.AdjList.keys();
  //     for (let i of keys) {
  //       let conc = "";
  //       for (let j of this.AdjList.get(i)) {
  //         conc += j + " ";
  //       }
  //       console.log(i + " -> " + conc);
  //     }
  //   }
  //   remove_edge(u, v) {
  //     let uu = this.AdjList.get(u);
  //     if (uu.length > 0) {
  //       let ind = uu.indexOf(v);
  //       ind && this.AdjList.get(u).splice(ind, 1);
  //       // this.AdjList.get(u) = f;
  //     }
  //   }
}

// let graph = new Graph(3);
// let verticess = ["1", "2", "3", "4", "5"];
// for (let i = 0; i < verticess.length; i++) {
//   graph.add_vertex(verticess[i]);
// }
// graph.add_edge("1", "2");
// graph.add_edge("1", "3");
// graph.add_edge("1", "4");
// graph.add_edge("2", "3");
// graph.add_edge("3", "2");
// graph.add_edge("4", "4");
// graph.add_edge("5", "2");

// graph.print_graph();
// graph.remove_edge("1", "3");
// console.log("----");
// graph.print_graph();

// -----------

matchData: [
  //array
  {
    //obj
    id: "2423",
    matchName: "round 2 ",
    gameToPlay: "COD",
    isDeleted: false,
    results: [
      //array
      {
        //obj
        playerName: "user1",
        score: "23 is my score",
        video: file,
        result: "win",
      },
      {
        playerName: "user2",
        score: "23 is my score",
        video: file,
        result: "win",
      },
    ],
  },
];

let graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

// const depthFirstSearch = (graph, src) => {
//   let stack = [source];
//   while (stack.length) {
//     let curr = stack.pop();
//     cl(curr);
//     for (let neighbor of graph[curr]) {
//       stack.push(neighbor);
//     }
//   }
// };
// depthFirstSearch(graph, "a");

// const breadthFirstSearch = (graph, source) => {
//   let stack = [source];
//   while (stack.length) {
//     let curr = stack.pop();
//     cl(curr);
//     for (let neighbor of graph[curr]) {
//       stack.unshift(neighbor);
//     }
//   }
// };
// breadthFirstSearch(graph, "a");

// const hasPath = (graph, src, dest) => {
//   if (src === dest) return true;
//   let stack = [src];
//   while (stack.length) {
//     let curr = stack.pop();
//     if (curr === dest) return true;
//     for (let neighbor of graph[curr]) {
//       stack.unshift(neighbor);
//     }
//   }
//   return false;
// };
// let src = "a",
//   dest = "r";
// cl(hasPath(graph, src, dest));

let UDGraphEdges = [
  ["i", "j"],
  ["i", "k"],
  ["k", "m"],
  ["k", "f"],
  ["f", "l"],
  ["o", "n"],
];
let graph1 = new Graph();
graph1.buildGraph(UDGraphEdges);
cl(graph1.graph);

let grid = [
  ["W", "L", "W", "W", "W"],
  ["W", "L", "W", "W", "W"],
  ["W", "W", "W", "L", "W"],
  ["W", "W", "L", "L", "W"],
  ["L", "W", "W", "L", "L"],
  ["L", "L", "W", "W", "W"],
];
let src = "i",
  dest = "l";
// cl(graph1.hasPathUndirected(src, dest, new Set()));
// cl(graph1.conuntConnectedComponents(src, new Set()));
// cl(graph1.largestComponent(src, new Set()));
// cl(graph1.shortestPath(src, dest));
// cl(graph1.numOflandCount(grid));
cl(graph1.minSizeIslandCount(grid));

function cl(params) {
  console.log(params);
}
