const { fizzBuzz } = require('./fizz-buzz');

// 1. write a describe to contain our tests
// 2. add a first test. You could use one of the console.log tests in the other file as a starting point
// 3. run the test with `npm test` to see if it passes
// 4. add another test, and another, and another, until you've tested all the functionality of the fizzBuzz function
describe('fizzBuzz', () => {
  it("if the number is divisible by 3 and 5, return 'FizzBuzz'", () => {
    const result = fizzBuzz(15);
    expect(result).toEqual('FizzBuzz');
  });
  it("if the number is divisible by 3, return 'Fizz'", () => {
    const result = fizzBuzz(9);
    expect(result).toEqual('Fizz');
  });
  it("if the number is divisible by 5, return 'Buzz'", () => {
    const result = fizzBuzz(10);
    expect(result).toEqual('Buzz');
  });
  it('otherwise, return the number', () => {
    const result = fizzBuzz(2);
    expect(result).toEqual(2);
  });
});
