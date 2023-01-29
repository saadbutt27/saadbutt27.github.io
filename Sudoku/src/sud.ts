class Solution {

   public isSafe(board:number[][],row:number,col:number,val:number): boolean {
       //column
       for(let i=0; i<board.length; i++) {
           if(board[i][col] == val) {
               return false;
           }
       }
      
       //row
       for(let j=0; j<board.length; j++) {
           if(board[row][j] == val) {
               return false;
           }
       }
      
       //grid
       let sr = 3 * Math.floor((row/3));
       let sc = 3 * Math.floor((col/3));
      
       for(let i=sr; i<sr+3; i++) {
           for(let j=sc; j<sc+3; j++) {
               if(board[i][j] == val) {
                   return false;
               }
           }
       }
      
       return true;
   }
  
   public helper(board:number[][],row:number,col:number): boolean {
       if(row == board.length) {
           return true;
       }
      
       let nrow = 0;
       let ncol = 0;
      
       if(col == board.length-1) {
           nrow = row + 1;
           ncol = 0;
       } else {
           nrow = row;
           ncol = col + 1;
       }
      
       if(board[row][col] != 0) {
           if(this.helper(board, nrow, ncol)) {
               return true;
           }
       } else {
          
           const shuffledArray = this.shuffleArray([...CONSTANT.NUMBERS]);
           for(let i=0; i<9; i++) {
               if(this.isSafe(board, row, col, shuffledArray[i])) {
                   board[row][col] =  shuffledArray[i];
                   if(this.helper(board, nrow, ncol))
                       return true;
                   else
                        board[row][col] = 0;
               }
           }
       }
                     
       return false;
   }
  
   public solveSudoku(board:number[][]):boolean {        
       this.helper(board, 0, 0);
       return true;
   }

   public shuffleArray = (arr:number[]) => {
    let curr_index = arr.length;
    while (curr_index !== 0) {
        let rand_index = Math.floor(Math.random() * curr_index);
        curr_index--;
        
        let temp = arr[curr_index];
        arr[curr_index] = arr[rand_index];
        arr[rand_index] = temp;
    }
    return arr;
    }

    public removeCells = (grid:number[][], level:number) => {
        let res = [...grid];
        let attemps = level;
        while (attemps > 0) {
            let row = this.rand();
            let col = this.rand();
            while (res[row][col] === 0) {
                row = this.rand();
                col = this.rand();
            }
            res[row][col] = CONSTANT.UNASSIGNED;
            attemps--;
        }
        return res;
    }

    public rand = () => Math.floor(Math.random() * CONSTANT.GRID_SIZE);

}

// let s = new Solution();

// let aa = [[0,0,0,0,0,0,0,0,0],
//             [0,0,0,0,0,0,0,0,0],
//             [0,0,0,0,0,0,0,0,0],
//             [0,0,0,0,0,0,0,0,0],
//             [0,0,0,0,0,0,0,0,0],
//             [0,0,0,0,0,0,0,0,0],
//             [0,0,0,0,0,0,0,0,0],
//             [0,0,0,0,0,0,0,0,0],
//             [0,0,0,0,0,0,0,0,0]];

// s.solveSudoku(aa);

// console.log(aa);





        