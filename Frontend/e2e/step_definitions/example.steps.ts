const { Given, When, Then } = require('cucumber');

// Define la interfaz para el estado del juego
interface Game {
  correctNumber: number;
}

let game: Game;  // Usa el tipo Game
let feedback: string;

Given('the game is running', function () {
  // Inicializa el juego
  game = { correctNumber: 7 }; // Cambia el número según tu lógica
  feedback = '';
});

When('I guess {int}', function (guess: number) {  // Especifica el tipo como number
  // Lógica del juego
  if (guess === game.correctNumber) {
    feedback = "Congratulations! You guessed the number!";
  } else if (guess > game.correctNumber) {
    feedback = "Too high! Try again.";
  } else {
    feedback = "Too low! Try again.";
  }
});

Then('I should be told {string}', function (expectedFeedback: string) {  // Especifica el tipo como string
  // Verifica el feedback esperado
  if (feedback !== expectedFeedback) {
    throw new Error(`Expected "${expectedFeedback}" but got "${feedback}"`);
  }
});
