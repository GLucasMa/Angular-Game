import { Component } from '@angular/core';

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent {
  secretNumber!: number;
  attempts!: number;
  message!: string;

  constructor() {
    this.resetGame();
  }

  resetGame() {
    this.secretNumber = Math.floor(Math.random() * 100) + 1;
    this.attempts = 0;
    this.message = '';
  }

  checkGuess(guess: string) {
    const userGuess = parseInt(guess, 10);
    this.attempts++;

    if (userGuess === this.secretNumber) {
      this.message = `¡Correcto! Adivinaste en ${this.attempts} intentos.`;
    } else if (userGuess < this.secretNumber) {
      this.message = 'El número es mayor.';
    } else {
      this.message = 'El número es menor.';
    }
  }
}

