let currentPlayer = "X";
let gameActive = true;
let board = ["", "", "", "", "", "", "", "", ""];

// All possible winning combinations [cite: 146]
const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8], // Rows
    [0,3,6], [1,4,7], [2,5,8], // Columns
    [0,4,8], [2,4,6]           // Diagonals
];

function makeMove(cell) {
    const index = Array.from(cell.parentNode.children).indexOf(cell);

    // Prevent move if square is occupied or game is over [cite: 131]
    if (!gameActive || board[index] !== "") return;

    // Update board state
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWinner()) {
        document.getElementById("status").textContent = `${currentPlayer} Wins!`;
        gameActive = false;
    } else if (!board.includes("")) {
        document.getElementById("status").textContent = "It's a Draw!";
        gameActive = false;
    } else {
        // Switch Player [cite: 143]
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

function checkWinner() {
    return winPatterns.some(pattern => {
        return pattern.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    document.getElementById("status").textContent = "";
    document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
}