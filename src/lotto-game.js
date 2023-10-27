/**
 * @author Francesco Moriconi
 * @file lotto-game.js
 * @class LottoGame
 * @classdesc Main class to manage the Lotto game.
 */

const Ticket = require('./ticket');
const PrizeCalculator = require('./prize-calculator');
const LottoDraw = require('./lotto-draw');
const { askQuestion } = require('./utils');

class LottoGame {
  /**
   * @constructor
   * @param {Object} rl - Readline interface for user interactions.
   */
  constructor(rl) {
    this.rl = rl;
    this.tickets = [];
  }

  /**
   * @async
   * @method createTickets
   * @param {number} numberOfTickets - The number of tickets to create.
   * @throws {Error} Will throw an error if unable to acquire ticket details.
   */
  async createTickets(numberOfTickets) {
    for (let i = 0; i < numberOfTickets; i++) {
      let type, amount, city, bet;
      try {
        type = await askQuestion(this.rl, "Inserisci il tipo di schedina (ambata, ambo, terno, quaterna, cinquina): ");
        amount = await askQuestion(this.rl, "Inserisci la quantità di numeri da generare (max 10 per schedina): ");
        city = await askQuestion(this.rl, "Inserisci la città (Bari, Cagliari, Firenze, Genova, Milano, Napoli, Palermo, Roma, Torino, Venezia, Nazionale): ");
        bet = await askQuestion(this.rl, "Quanto vuoi scommettere su questa combinazione? (es. 2.50) ");
      } catch (err) {
        throw new Error("Errore durante l'acquisizione dei dettagli della schedina:" + err);
      }
      const ticket = new Ticket(type, parseInt(amount), city, parseFloat(bet));
      ticket.generateNumbers();
      this.tickets.push(ticket);
    }
  }

  /**
   * @method generateDraw
   * @description Generates a new draw.
   */
  generateDraw() {
    this.draw = new LottoDraw();
  }

  /**
   * @method printDraw
   * @description Prints the current draw.
   */
  printDraw() {
    this.draw.printDraw();
  }

  /**
   * @method calculateAndPrintWinnings
   * @description Calculates and prints the winnings.
   */
  calculateAndPrintWinnings() {
    const prizeCalculator = new PrizeCalculator();
  
    this.tickets.forEach(ticket => {
      const drawNumbersForCity = this.draw.draw[ticket.city];
      const matchingNumbers = ticket.numbers.filter(number => drawNumbersForCity.includes(number));
      const winnings = prizeCalculator.calculateWinnings(ticket, matchingNumbers);
      ticket.printTicket();
  
      if (winnings > 0) {
        console.log(`La schedina per la città ${ticket.city} ha vinto €${winnings.toFixed(2)}`);
      } else {
        console.log(`La schedina per la città ${ticket.city} non ha vinto.`);
      }
    });
  }
}

module.exports = LottoGame;
