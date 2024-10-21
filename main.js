
// Variables to store the random number and remaining attempts 
let randomNumber;
let attemptsLeft;

// Function to initialize and start the game
function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number
    attemptsLeft = 10; // Reset attempts

    document.getElementById('message').textContent = 'Guess a number between 1 and 100!';
    document.getElementById('attempts').textContent = `You have ${attemptsLeft} attempts left.`;

    playGame();
}

// Function to handle user guesses
function playGame() {
    while (attemptsLeft > 0) {
        let userGuess = parseInt(window.prompt('Enter your guess (between 1 and 100):'), 10);

        // Input validation
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            window.alert('Please enter a valid number between 1 and 100.');
            continue;
        }

        attemptsLeft--;

        // Update the number of attempts left in the DOM
        document.getElementById('attempts').textContent = `You have ${attemptsLeft} attempts left.`;

        // Check if the guess is correct
        if (userGuess === randomNumber) {
            document.getElementById('message').textContent = 'Congratulations! You guessed the correct number!';
            return; // End the game
        } else if (userGuess < randomNumber) {
            window.alert('Too low! Try again.');
        } else {
            window.alert('Too high! Try again.');
        }

        // If no attempts are left, show game over message
        if (attemptsLeft === 0) {
            document.getElementById('message').textContent = `Game over! The correct number was ${randomNumber}.`;
        }
    }
}

// Add an event listener to the "Start Game" button
document.getElementById('start-btn').addEventListener('click', startGame);
