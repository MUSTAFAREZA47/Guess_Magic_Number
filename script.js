// Variables
let magicNumber = Math.floor(Math.random() * 100) + 1
let chances = 5

// DOM elements
const guessInput = document.getElementById('guess')
const submitButton = document.getElementById('submit')
const responseMessage = document.getElementById('response-message')
const remainingChances = document.getElementById('remaining-chances')
const gameMessage = document.getElementById('game-message')

// Game logic
function checkGuess() {
    const guess = parseInt(guessInput.value)
    if (isNaN(guess) || guess < 1 || guess > 100) {
        responseMessage.textContent =
            'Please enter a valid number between 1 and 100.'
        return
    }

    // Check if guess is correct
    if (guess === magicNumber) {
        responseMessage.textContent =
            '🎉 Congratulations! You guessed the magic number! 🎉'
        resetGame()
    } else {
        // Give hints
        if (guess > magicNumber) {
            responseMessage.textContent =
                '📉 Your guessed number is higher than the magic number!'
        } else {
            responseMessage.textContent =
                '📈 Your guessed number is lower than the magic number!'
        }

        chances--
        remainingChances.textContent = chances

        // Check if the player has used all chances
        if (chances === 0) {
            responseMessage.textContent += ` Game Over! The magic number was ${magicNumber}.`
            resetGame()
        }
    }

    // Clear the input after submission
    guessInput.value = ''
    guessInput.focus()
}

// Reset the game
function resetGame() {
    magicNumber = Math.floor(Math.random() * 100) + 1
    chances = 5
    remainingChances.textContent = chances
    setTimeout(() => {
        responseMessage.textContent = ''
        gameMessage.textContent =
            'Guess a number between 1 and 100. You have 5 chances left.'
    }, 3000)
}

// Event listener for the submit button
submitButton.addEventListener('click', checkGuess)

// Allow pressing Enter to submit the guess
guessInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        checkGuess()
    }
})
