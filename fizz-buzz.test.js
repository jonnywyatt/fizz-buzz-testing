const { fizzBuzz } = require('./fizz-buzz');

// 1. write a describe to contain our tests
// 2. add a first test. You could use one of the console.log tests in the other file as a starting point
// 3. run the test with `npm test` to see if it passes
// 4. add another test, and another, and another, until you've tested all the functionality of the fizzBuzz function

describe('fizz', () => {

      test('should if the number is divisible by 3, return Fizz', () => {
            const result = fizzBuzz(3);
            expect(result).toEqual('Fizz')
      })
})
describe('Buzz', () => {

      test('should if the number is divisible by 5, return Buzz', () => {
            const result = fizzBuzz(5);
            expect(result).toEqual('Buzz')
      })
})
describe('FizzBuzz', () => {

      test('should if the number is divisible by 3 or 5, return FizzBuzz', () => {
            const result = fizzBuzz(15);
            expect(result).toEqual('FizzBuzz')
      })
})
describe('number', () => {

      test('should if the number is not able to divisible by 3 or 5 return the number', () => {
            const result = fizzBuzz(11);
            expect(result).toEqual(11)
      })
})