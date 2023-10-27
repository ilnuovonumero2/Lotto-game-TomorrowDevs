/**
 * @author Francesco Moriconi
 * @file prize-calculator.js
 * @class PrizeCalculator
 * @classdesc Class responsible for calculating the winnings of a lottery ticket.
 */

const WIN_PRIZES = require('./winPrizesConfig');

class PrizeCalculator {
  /**
   * @constructor
   * @description Initializes the winnings configuration.
   */
  constructor() {
    this.WIN_PRIZES = WIN_PRIZES;
  }

  /**
   * @method calculateWinnings
   * @param {Object} ticket The lottery ticket object.
   * @param {Array} matchingNumbers The numbers that matched in the draw.
   * @returns {number} The amount won.
   * @description Calculates the winnings based on the ticket and matching numbers.
   */
  calculateWinnings(ticket, matchingNumbers) {
    const type = ticket.type;
    const count = matchingNumbers.length;

    if (count < 2 || !this.WIN_PRIZES[type]) {
      return 0;  
    }

    const combinations = (n, r) => {
      let num = 1;
      for (let i = r + 1; i <= n; i++) {
        num *= i;
      }
      let den = 1;
      for (let i = 1; i <= n - r; i++) {
        den *= i;
      }
      return num / den;
    };

    const winningCombos = combinations(count, type === 'ambata' ? 1 : (type === 'ambo' ? 2 : (type === 'terno' ? 3 : (type === 'quaterna' ? 4 : 5))));

    const baseWinning = this.WIN_PRIZES[type][ticket.amount - 1] || 0;

    let totalWinning = baseWinning * winningCombos * ticket.bet;

    if (totalWinning > 500) {
      totalWinning -= 0.08 * totalWinning;  
    }

    return totalWinning;
  }
}

module.exports = PrizeCalculator;
