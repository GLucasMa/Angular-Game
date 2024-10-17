import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-juego',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent {
  secretNumber!: number;
  attempts!: number;
  message!: string;
  loading = false;  // Controla el estado de cargado

  constructor() {
    this.resetGame();
  }

  handleGuess(guessValue: string) {
    const guess = parseInt(guessValue, 10); // Convertir a número

    this.loading = true; // Activar el ícono de cargado al hacer clic

    // Simular procesamiento con un pequeño retraso
    setTimeout(() => {
      const isCorrect = this.checkGuess(guess);

      if (isCorrect) {
        this.message = `¡Correcto! Adivinaste el número en ${this.attempts} intentos.`;
      }
      this.loading = false;  // Desactivar el ícono de cargado una vez procesado
    }, 1000);  // Simula 1 segundo de "carga"
  }

  resetGame() {
    this.secretNumber = Math.floor(Math.random() * 100) + 1;
    this.attempts = 0;
    this.message = '';
    this.loading = false;
  }

  checkGuess(guess: number): boolean {
    this.attempts++; // Incrementar el número de intentos

    if (guess === this.secretNumber) {
      return true; // Adivinaste correctamente
    } else if (guess < this.secretNumber) {
      this.message = 'El número es mayor.';
    } else {
      this.message = 'El número es menor.';
    }
    return false; // Todavía no has adivinado
  }
}
