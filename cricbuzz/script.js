// Sample cricket score data for demonstration
const scores = [
    "India vs Pakistan: India 250/3 in 40 overs",
    "Australia vs England: Australia 180/5 in 30 overs",
    "South Africa vs New Zealand: New Zealand 210/4 in 35 overs"
];

// Function to simulate live updates
function updateScore() {
    const scoreElement = document.getElementById("score");
    let index = 0;

    // Update score every 5 seconds
    setInterval(() => {
        scoreElement.textContent = scores[index];
        index = (index + 1) % scores.length; // Cycle through scores
    }, 5000);
}

// Initialize the score updater
document.addEventListener("DOMContentLoaded", updateScore);
