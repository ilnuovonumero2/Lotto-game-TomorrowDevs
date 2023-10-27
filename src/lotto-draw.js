/**
 * @author Francesco Moriconi
 * @file lotto-draw.js
 * @class LottoDraw
 * @classdesc Class responsible for generating and printing the lottery draw.
 */

class LottoDraw {
  /**
   * @constructor
   * @description Initializes the list of cities and generates the initial draw.
   */
  constructor() {
    this.cities = ['Bari', 'Cagliari', 'Firenze', 'Genova', 'Milano', 'Napoli', 'Palermo', 'Roma', 'Torino', 'Venezia', 'Nazionale'];
    this.draw = this.generateDraw();
  }

  /**
   * @method generateDraw
   * @description Generates a new lottery draw.
   * @returns {Object} The generated draw.
   */
  generateDraw() {
    const draw = {};
    this.cities.forEach(city => {
      draw[city] = [];
      for (let i = 0; i < 5; i++) {
        let number = Math.floor(Math.random() * 90) + 1;
        while (draw[city].includes(number)) {
          number = Math.floor(Math.random() * 90) + 1;
        }
        draw[city].push(number);
      }
    });
    return draw;
  }

  /**
   * @method printDraw
   * @description Prints the current draw to the console.
   */
  printDraw() {
    console.log("Estrazione:");
    for (const [city, numbers] of Object.entries(this.draw)) {
      console.log(`Città: ${city}, Numeri: ${numbers.join(', ')}`);
    }
  }
}

module.exports = LottoDraw;
