import { JuegoComponent } from './juego.component';

describe('JuegoComponent', () => {
  let component: JuegoComponent;

  beforeEach(() => {
    component = new JuegoComponent();
    component.resetGame(); // Iniciar el juego para generar el número secreto
  });

  it('debería generar un número secreto entre 1 y 100 al iniciar el juego', () => {
    expect(component.secretNumber).toBeGreaterThanOrEqual(1);
    expect(component.secretNumber).toBeLessThanOrEqual(100);
  });

  it('debería incrementar los intentos cada vez que se adivina un número', () => {
    const initialAttempts = component.attempts;
    component.checkGuess(50); // Simular una adivinanza
    expect(component.attempts).toBe(initialAttempts + 1);
  });

  it('debería mostrar "El número es mayor" cuando el número ingresado es menor al número secreto', () => {
    component.secretNumber = 70; // Establecemos el número secreto para esta prueba
    component.checkGuess(50);
    expect(component.message).toBe('El número es mayor.');
  });

  it('debería mostrar "El número es menor" cuando el número ingresado es mayor al número secreto', () => {
    component.secretNumber = 30; // Establecemos el número secreto para esta prueba
    component.checkGuess(50);
    expect(component.message).toBe('El número es menor.');
  });

  it('debería mostrar el mensaje correcto cuando se adivina el número secreto', () => {
    component.secretNumber = 50; // Establecemos el número secreto
    component.checkGuess(50);
    expect(component.message).toBe(`¡Correcto! Adivinaste en ${component.attempts} intentos.`);
  });
});
