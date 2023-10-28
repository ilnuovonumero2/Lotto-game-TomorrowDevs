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

    if (count < 1 || !this.WIN_PRIZES[type]) {
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

    const typeToR = {
      'ambata': 1,
      'ambo': 2,
      'terno': 3,
      'quaterna': 4,
      'cinquina': 5
    };

    const r = typeToR[type] || 0;

    const winningCombos = combinations(count, r);

    const baseWinning = this.WIN_PRIZES[type][ticket.amount - 1] || 0;

    let totalWinning = baseWinning * winningCombos * ticket.bet;

    if (totalWinning > 500) {
      totalWinning -= 0.08 * totalWinning;  
    }

    return totalWinning;
  }
}

module.exports = PrizeCalculator;
