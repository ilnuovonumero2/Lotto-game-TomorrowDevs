/**
 * Lotto Game Main Entry Point
 * 
 * @author Francesco Moriconi
 * @file main.js
 */

// Import required modules
const readline = require('readline');
const LottoGame = require('./src/lotto-game');
const { askQuestion } = require('./src/utils');

/**
 * Create a readline interface for user interaction via the terminal
 * @type {import('readline').Interface}
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Main function to run the Lotto game
 * @async
 * @function
 */
async function main() {
  /**
   * Create a new LottoGame object
   * @type {LottoGame}
   */
  const lottoGame = new LottoGame(rl);

  try {
    /**
     * Ask the user how many tickets they want to generate
     * @type {string}
     */
    const numberOfTickets = await askQuestion(rl, "Quante schedine vuoi generare? (min: 1, max: 5, 0: esci) ");
    
    // If the user inputs 0, exit the program
    if (parseInt(numberOfTickets) === 0) {
      rl.close();
      return;
    }

    // Create the tickets based on the number provided by the user
    await lottoGame.createTickets(parseInt(numberOfTickets));

    // Generate the draw numbers
    lottoGame.generateDraw();

    // Print the draw numbers
    lottoGame.printDraw();

    // Calculate and print the winnings
    lottoGame.calculateAndPrintWinnings();

  } catch (err) {
    // Handle any errors
    console.error("Si è verificato un errore:", err);
  }

  // Close the readline interface
  rl.close();
}

// Run the main function
main();
