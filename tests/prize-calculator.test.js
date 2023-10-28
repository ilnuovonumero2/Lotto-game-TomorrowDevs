const PrizeCalculator = require('../src/prize-calculator');

const WIN_PRIZES_MOCK = {
  ambata: [10, 20],
  ambo: [30, 40],
  terno: [50, 60]
};

jest.mock('../src/winPrizesConfig', () => WIN_PRIZES_MOCK);

describe('PrizeCalculator Class', () => {

  test('should create a PrizeCalculator object', () => {
    const prizeCalculator = new PrizeCalculator();
    expect(prizeCalculator).toBeInstanceOf(PrizeCalculator);
    expect(prizeCalculator.WIN_PRIZES).toEqual(WIN_PRIZES_MOCK);
  });

  test('should calculate winnings correctly for ambata', () => {
    const prizeCalculator = new PrizeCalculator();
    const ticketMock = {
      type: 'ambata',
      amount: 1,
      bet: 2
    };
    const matchingNumbers = [1];

    const winnings = prizeCalculator.calculateWinnings(ticketMock, matchingNumbers);
    expect(winnings).toBe(20);
  });

  test('should calculate winnings correctly for ambo', () => {
    const prizeCalculator = new PrizeCalculator();
    const ticketMock = {
      type: 'ambo',
      amount: 2,  // Secondo elemento nell'array
      bet: 1
    };
    const matchingNumbers = [1, 2];
  
    const winnings = prizeCalculator.calculateWinnings(ticketMock, matchingNumbers);
    expect(winnings).toBe(40);  // Aspettati 40 invece di 30
  });

  test('should return 0 if no matching numbers', () => {
    const prizeCalculator = new PrizeCalculator();
    const ticketMock = {
      type: 'ambata',
      amount: 1,
      bet: 2
    };
    const matchingNumbers = [];

    const winnings = prizeCalculator.calculateWinnings(ticketMock, matchingNumbers);
    expect(winnings).toBe(0);
  });

});
