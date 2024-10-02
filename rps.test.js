const { rockPaperScissors } = require('./rps.js');

// Run the tests by typing npm test in the terminal below


describe('rockPaperScissors function tests', () => {
    test('test_1_draw', () => {
        expect(rockPaperScissors('paper', 'paper')).toBe('draw');
        expect(rockPaperScissors('rock', 'rock')).toBe('draw');
        expect(rockPaperScissors('scissors', 'scissors')).toBe('draw');
    });

    test('test_2_player1wins', () => {
        expect(rockPaperScissors('scissors', 'paper')).toBe('player1');
        expect(rockPaperScissors('paper', 'rock')).toBe('player1');
        expect(rockPaperScissors('rock', 'scissors')).toBe('player1');
    });

    test('test_3_player2wins', () => {
        expect(rockPaperScissors('rock', 'paper')).toBe('player2');
        expect(rockPaperScissors('scissors', 'rock')).toBe('player2');
        expect(rockPaperScissors('paper', 'scissors')).toBe('player2');
    });

    test('test_4_RPSLS_Draw', () => {
        expect(rockPaperScissors('lizard', 'lizard')).toBe('draw');
        expect(rockPaperScissors('spock', 'spock')).toBe('draw');
        
    });

    test('test_5_RPSLS_player1wins', () => {
        expect(rockPaperScissors('rock', 'lizard')).toBe('player1');
        expect(rockPaperScissors('scissors', 'lizard')).toBe('player1');
        expect(rockPaperScissors('lizard', 'paper')).toBe('player1');
        expect(rockPaperScissors('spock', 'rock')).toBe('player1');
        expect(rockPaperScissors('spock', 'scissors')).toBe('player1');
        expect(rockPaperScissors('lizard', 'spock')).toBe('player1');
        expect(rockPaperScissors('paper', 'spock')).toBe('player1');

    });
        
    test('test_5_RPSLS_player1wins', () => {
        expect(rockPaperScissors('rock', 'lizard')).toBe('player1');
        expect(rockPaperScissors('scissors', 'lizard')).toBe('player1');
        expect(rockPaperScissors('lizard', 'paper')).toBe('player1');
        expect(rockPaperScissors('spock', 'rock')).toBe('player1');
        expect(rockPaperScissors('spock', 'scissors')).toBe('player1');
        expect(rockPaperScissors('lizard', 'spock')).toBe('player1');
        expect(rockPaperScissors('paper', 'spock')).toBe('player1');

    });

    test('test_6_RPSLS_player2wins', () => {
        expect(rockPaperScissors('paper', 'lizard')).toBe('player2');
        expect(rockPaperScissors('spock', 'lizard')).toBe('player2');
        expect(rockPaperScissors('spock', 'paper')).toBe('player2');
        expect(rockPaperScissors('lizard', 'rock')).toBe('player2');
        expect(rockPaperScissors('lizard', 'scissors')).toBe('player2');
        expect(rockPaperScissors('rock', 'spock')).toBe('player2');
        expect(rockPaperScissors('scissors', 'spock')).toBe('player2');

    });

});