Feature: Guessing Game

  Scenario: Player guesses the correct number
    Given the game is running
    When I guess 7
    Then I should be told "Congratulations! You guessed the number!"

  Scenario: Player guesses a number too high
    Given the game is running
    When I guess 10
    Then I should be told "Too high! Try again."

  Scenario: Player guesses a number too low
    Given the game is running
    When I guess 3
    Then I should be told "Too low! Try again."
