// average.test.js
const averageModule = require('../average');

describe('Average Calculation Tests', () => {
    test('TC1: No valid values', () => {
        expect(averageModule.average([-999], 10, 100)).toBe(-999);
    });

    test('TC2: One valid value', () => {
        expect(averageModule.average([50], 10, 100)).toBe(50);
    });

    test('TC3: Average of valid values', () => {
        expect(averageModule.average([50, 70, -999], 10, 100)).toBe(60);
    });

    test('TC4: Only one valid value within range', () => {
        expect(averageModule.average([150, 50, -999], 10, 100)).toBe(50);
    });

    test('TC5: No values within range', () => {
        expect(averageModule.average([150, 200, -999], 10, 100)).toBe(-999);
    });
});
