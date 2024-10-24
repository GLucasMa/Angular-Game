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
  loading = false;  
  maxNumber: number = 100; 
  difficulty: string = 'medio'; // Nivel de dificultad predeterminado

  constructor() {
    this.resetGame();
  }

  handleGuess(event: Event) {
    const target = event.target as HTMLInputElement;
    const guessValue = target.value;

    // Agregar verificación para evitar que guessValue esté vacío
    if (!guessValue) {
        this.message = 'Por favor, ingresa un número válido.';
        return; // No continuar si no hay valor
    }

    const guess = parseInt(guessValue, 10); // Convertir a número

    console.log(`Valor ingresado: ${guessValue}, Guess convertido: ${guess}`); // Depuración

    this.loading = true;

    setTimeout(() => {
        const isCorrect = this.checkGuess(guess);

        if (isCorrect) {
            this.message = `¡Correcto! Adivinaste el número en ${this.attempts} intentos.`;
        }
        this.loading = false;
    }, 1000); // Simula 1 segundo de "carga"
}

  

  resetGame() {
    this.secretNumber = Math.floor(Math.random() * this.maxNumber) + 1;
    this.attempts = 0;
    this.message = '';
    this.loading = false;
  }

  setDifficulty(level: string) {
    this.difficulty = level;

    switch (level) {
      case 'facil':
        this.maxNumber = 50;
        break;
      case 'medio':
        this.maxNumber = 100;
        break;
      case 'dificil':
        this.maxNumber = 200;
        break;
    }
    this.resetGame(); // Reiniciar el juego cuando cambie la dificultad
  }

  checkGuess(guess: number): boolean {
    // Validar si el ingreso es un número válido
    if (isNaN(guess)) {
        this.message = 'El ingreso es inválido'; // Mensaje de ingreso inválido
        return false; // No se ha adivinado
    }

    this.attempts++; // Incrementar el número de intentos

    if (guess < 1 || guess > this.maxNumber) {
        this.message = 'El número debe estar entre 1 y ' + this.maxNumber; // Mensaje si el número está fuera de rango
        return false; // No se ha adivinado
    }

    if (guess === this.secretNumber) {
        this.message = '¡Correcto!'; // Mensaje de adivinanza correcta
        return true; // Adivinaste correctamente
    } else if (guess < this.secretNumber) {
        this.message = 'El número es mayor.'; // Mensaje si el número es menor
    } else if (guess > this.secretNumber) {
        this.message = 'El número es menor.'; // Mensaje si el número es mayor
    }

    return false; // Todavía no has adivinado
}

}


/* 
export class JuegoComponent {
  secretNumber!: number;
  attempts: number = 0;
  message!: string;

  constructor() {
    this.resetGame();
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

  resetGame() {
    this.secretNumber = Math.floor(Math.random() * 100) + 1;
    this.attempts = 0;
    this.message = '';
  }
} */