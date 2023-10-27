const LottoDraw = require('../src/lotto-draw'); 

describe('LottoDraw Class', () => {

  test('should create a LottoDraw object', () => {
    const lottoDraw = new LottoDraw();
    expect(lottoDraw).toBeInstanceOf(LottoDraw);
    expect(lottoDraw.cities).toEqual(expect.arrayContaining(['Bari', 'Roma', 'Nazionale']));  
  });

  test('should generate a draw for each city with 5 unique numbers between 1 and 90', () => {
    const lottoDraw = new LottoDraw();
    const draw = lottoDraw.generateDraw();
    expect(Object.keys(draw)).toEqual(expect.arrayContaining(['Bari', 'Roma', 'Nazionale']));  

    for (const [city, numbers] of Object.entries(draw)) {
      expect(numbers.length).toBe(5);
      expect([...new Set(numbers)].length).toBe(5);  
      numbers.forEach(num => {
        expect(num).toBeGreaterThanOrEqual(1);
        expect(num).toBeLessThanOrEqual(90);
      });
    }
  });

});



