import { sum, substract } from './calculator'


describe('Calculator', () => {
    describe('sum function', () => {
        it('should return 4 when add 2 and 2', () => {
            const result = sum(2, 2);
            expect(result).toBe(4);
        });
    });
    describe('substract function', () => { // TDD Test Driven Development
            it('should return 3 when substract 4 from 7', () => {
                const result = substract(7, 4);
                expect(result).toBe(3);
            })
        })
        // describe('')
});