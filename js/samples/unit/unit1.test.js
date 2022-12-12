import { sayHello } from "./unit1";

describe('sayHello Unit Test Suites', () => {
    it('should return "Hello, World', () => {
        expect(sayHello()).toBe('Hello, World')
    })
    it('should return "Hello, Thomas"', () => {
        expect(sayHello("Thomas")).not.toBe('Hello, Thomas')
    })
});