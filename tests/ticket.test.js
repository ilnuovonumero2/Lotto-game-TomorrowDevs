const Ticket = require('../src/ticket'); 

describe('Ticket Class', () => {

  test('should create a Ticket object', () => {
    const ticket = new Ticket('ambata', 5, 'Roma', 1.0);
    expect(ticket).toBeInstanceOf(Ticket);
    expect(ticket.type).toBe('ambata');
    expect(ticket.amount).toBe(5);
    expect(ticket.city).toBe('Roma');
    expect(ticket.bet).toBe(1.0);
  });

  test('should generate specified amount of unique numbers between 1 and 90', () => {
    const ticket = new Ticket('ambata', 5, 'Roma', 1.0);
    const numbers = ticket.generateNumbers();
    expect(numbers.length).toBe(5);
    expect([...new Set(numbers)].length).toBe(5);  // Verifica l'unicità dei numeri
    numbers.forEach(num => {
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(90);
    });
  });


});