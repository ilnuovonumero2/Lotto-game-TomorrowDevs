/**
 * @author Francesco Moriconi
 * @file utils.js
 * @description This utility file contains helper functions for the main application.
 */

/**
 * @function askQuestion
 * @param {Object} rl - The readline object.
 * @param {string} query - The question to ask.
 * @returns {Promise<string>} - A Promise that resolves with the answer.
 * @description Asks a question using the readline object and returns a Promise that resolves with the answer.
 */
function askQuestion(rl, query) {
  return new Promise((resolve, reject) => {
    try {
      rl.question(query, answer => {
        resolve(answer);
      });
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  askQuestion
};
