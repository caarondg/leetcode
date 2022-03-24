// 79. Word Search - https://leetcode.com/problems/word-search/ - Medium
const isOutOfBounds = (board, row, col) => row < 0 || row >= board.length || col < 0 || col >= board[0].length;

function checkAdjacent(board, word, row, col) {
    if (!word.length) { return true; } //word found | exhausted all letters
    if (isOutOfBounds(board, row, col) || board[row][col] !== word[0]) { return false; }
    
    const currChar = board[row][col];
    const cutWord = word.substr(1);
    
    board[row][col] = '*'; //disable current
    
    const results = checkAdjacent(board, cutWord, row + 1, col)
        || checkAdjacent(board, cutWord, row, col + 1)
        || checkAdjacent(board, cutWord, row - 1, col)
        || checkAdjacent(board, cutWord, row, col - 1 );
    
    board[row][col] = currChar; //reenable
    
    return results;
}

function exist(board: string[][], word: string): boolean {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (checkAdjacent(board, word, row, col)) {
                return true;
            }
        }
    }
    
    return false;
};