/**
 * @author Francesco Moriconi
 * @file winPrizesConfig.js
 * @description This configuration file contains prize ratios for different bet types in the lotto game.
 * @module winPrizesConfig
 */

/**
 * @exports winPrizesConfig
 * @type {Object}
 * 
 * @property {Array<number>} ambata - The prize ratios for 'ambata' type of bet.
 * @property {Array<number>} "estr. det." - The prize ratios for 'estr. det.' type of bet.
 * @property {Array<number>} ambo - The prize ratios for 'ambo' type of bet.
 * @property {Array<number>} terno - The prize ratios for 'terno' type of bet.
 * @property {Array<number>} quaterna - The prize ratios for 'quaterna' type of bet.
 * @property {Array<number>} cinquina - The prize ratios for 'cinquina' type of bet.
 */
module.exports = {
  ambata: [10.33, 5.16, 3.44, 2.57, 2.06, 1.72, 1.47, 1.28, 1.14, 1.03],
  "estr. det.": [50.60, 25.30, 16.86, 12.65, 10.12, 8.42, 7.22, 6.32, 5.62, 5.06],
  ambo: [null, 230, 76.66, 38.32, 23, 15.32, 10.94, 8.20, 6.38, 5.10],
  terno: [null, null, 4140, 1035, 414, 207, 118.28, 73.92, 49.28, 34.50],
  quaterna: [null, null, null, 110400, 22080, 7360, 3154.28, 1577.13, 876.18, 525.70],
  cinquina: [null, null, null, null, 5520000, 920000, 262857.13, 98771.42, 43809.51, 21904.75]
};
