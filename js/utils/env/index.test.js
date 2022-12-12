import { isInTestEnv } from "./index"

describe('isInTestEnv Unit test suites', () => {
    it('should be in test', () => {
        expect(isInTestEnv()).toBe(true)
    })
    it('should not be in test', () => {
        process.env.NODE_ENV = 'dev'
        expect(isInTestEnv()).not.toBe(true)
    })
   
})
