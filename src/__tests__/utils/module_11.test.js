import { countDown } from "../../utils/module_11.js";

describe('countDown function', () => {
    let logs = [];

    beforeEach(() => {
        logs = [];
        console.log = (message) => logs.push(message);
    });

    afterEach(() => {
        console.log = jest.fn();
    });

    it('выводит числа от 3 до 1', () => {
        countDown(3);
        expect(logs[0]).toBe(3); 
        expect(logs[1]).toBe(2); 
        expect(logs[2]).toBe(1); 
    });

    it('выводит только 1 при n = 1', () => {
        countDown(1);
        expect(logs[0]).toBe(1); 
    });

    it('не выводит числа при n = 0', () => {
        countDown(0);
        expect(logs.length).toBe(0); 
    });

    it('не выводит числа при n = -5', () => {
        countDown(-5);
        expect(logs.length).toBe(0); 
    });

    it('округляет дробные числа вниз и выводит 2, 1 при n = 2.5', () => {
        countDown(2.5);
        expect(logs[0]).toBe(2);
        expect(logs[1]).toBe(1);
    });

    it('не выводит числа при n = "abc"', () => {
        countDown("abc");
        expect(logs.length).toBe(0);
    });
});