class Maze{
  constructor() {
    
  }

  countWays(r,c) {
    if (r == 1 || c == 1) return 1;
    return this.countWays(r-1,c) + this.countWays(r,c-1);
  }
  printPath(path,r,c) {
    if (r == 1 && c == 1) { console.log(path); return; };
    if (r == 1 && c !== 1) return this.printPath(path + 'R', r, c - 1);
    if (r !== 1 && c == 1) return this.printPath(path + 'D', r - 1, c);
    return this.printPath(path+'D',r-1,c) + this.printPath(path+'R',r,c-1);
  }
  printArrPath(path,r,c) {
    if (r == 1 && c == 1) {
      let arr = [];
      arr.push(path);
      return arr;
    };
    let list = [];
    if (r > 1) {
      return list.push(this.printArrPath(path + 'D', r - 1, c))
    }
    if (c > 1) {
      return list.push(this.printArrPath(path + 'R', r, c - 1))
    }
  }
  printDiagPath(path,r,c) {
    if (r == 1 && c == 1) { console.log(path); return; };

    if (r > 1 && c>1) {
      this.printDiagPath(path + 'D', r - 1, c-1)
    }
    if (r > 1) {
      (this.printDiagPath(path + 'V', r - 1, c))
    }
    if (c > 1) {
      (this.printDiagPath(path + 'H', r, c - 1))
    }
  }
  printAllPath(path, maze, r, c) {
    if (r ==maze.length-1 && c == maze[0].length-1) {
      console.log(path);
      return;
    }

    //dont make recursion when go back to the already marked
    if (maze[r][c] ==false) return;

    //mark false those, which you have visited
    maze[r][c] = false;

    if (r < maze.length-1) {
      this.printAllPath(path + 'D', maze, r+1, c )
    }
    if (c < maze[0].length-1) {
      this.printAllPath(path + 'R', maze, r, c +1)
    }

    //untill row is zero and column is zero you can move up and left
    if (r > 0) {
      this.printAllPath(path + 'U', maze, r - 1, c)
    }
    if (c > 0) {
      this.printAllPath(path + 'L', maze, r, c - 1)
    }

    //when you going out, mark the thing true OR revert the visited things
    maze[r][c] = true;
  }
}

const mazeObj = new Maze();
// cl(mazeObj.countWays(3,3))
// cl(mazeObj.printPath('',3,3))
// cl(mazeObj.printArrPath('',3,3))
// cl(mazeObj.printDiagPath('',3,3))
let maze = [
  [true,true,true],
  [true,true,true],
  [true,true,true],
]
cl(mazeObj.printAllPath('', maze, 0, 0))

/**
 * 
 * cl
 * 
 * 
 */

function cl(params) {
  console.log(params)
  
}