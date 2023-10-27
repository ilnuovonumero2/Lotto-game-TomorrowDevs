/**
 * @author Francesco Moriconi
 * @file Ticket.js
 * @class Ticket
 * @classdesc Class responsible for managing a single lottery ticket.
 */

class Ticket {
  /**
   * @constructor
   * @param {string} type The type of ticket (e.g., 'ambata', 'ambo').
   * @param {number} amount The amount of numbers on the ticket.
   * @param {string} city The city for which the ticket is issued.
   * @param {number} bet The bet amount.
   * @description Initializes the ticket with the given parameters and generates numbers.
   */
  constructor(type, amount, city, bet) {
    this.type = type;
    this.amount = amount;
    this.city = city;
    this.bet = bet;
    this.numbers = this.generateNumbers();
  }

  /**
   * @method generateNumbers
   * @returns {Array} The generated numbers for the ticket.
   * @description Generates a unique set of random numbers for the ticket.
   */
  generateNumbers() {
    const numbers = [];
    for (let i = 0; i < this.amount; i++) {
      let number = Math.floor(Math.random() * 90) + 1;
      while (numbers.includes(number)) {
        number = Math.floor(Math.random() * 90) + 1;
      }
      numbers.push(number);
    }
    return numbers;
  }

  /**
   * @method printTicket
   * @description Prints the ticket details to the console.
   */
  printTicket() {
    console.log(`|----------- ${this.city} ------------|`);
    console.log(`| Tipo: ${this.type}  Quantità: ${this.amount} |`);
    console.log(`| Puntata: €${this.bet.toFixed(2)} |`); 
    console.log(`| Numeri: ${this.numbers.join(', ')}  |`);
    console.log(`|--------------------------------|`);
  }
}

module.exports = Ticket;
