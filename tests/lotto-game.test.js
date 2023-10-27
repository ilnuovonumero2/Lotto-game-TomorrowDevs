const LottoGame = require('../src/lotto-game');
const Ticket = require('../src/ticket');
const LottoDraw = require('../src/lotto-draw');
const PrizeCalculator = require('../src/prize-calculator');

jest.mock('../src/ticket');
jest.mock('../src/lotto-draw');
jest.mock('../src/prize-calculator');

describe('LottoGame Class', () => {
  
  let rlMock;
  
  beforeEach(() => {
    Ticket.mockClear();
    LottoDraw.mockClear();
    PrizeCalculator.mockClear();

    rlMock = {
      question: jest.fn(),
    };
  });

  test('should create a LottoGame object', () => {
    const lottoGame = new LottoGame(rlMock);
    expect(lottoGame).toBeInstanceOf(LottoGame);
    expect(lottoGame.tickets).toEqual([]);
  });

  test('should create tickets', async () => {
    rlMock.question.mockImplementation((query, cb) => cb('someValue'));
    const lottoGame = new LottoGame(rlMock);

    await lottoGame.createTickets(2);

    expect(Ticket).toHaveBeenCalledTimes(2);
  });

  test('should generate a draw', () => {
    const lottoGame = new LottoGame(rlMock);

    lottoGame.generateDraw();

    expect(LottoDraw).toHaveBeenCalledTimes(1);
  });


});

