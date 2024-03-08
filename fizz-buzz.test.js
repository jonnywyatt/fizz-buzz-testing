const { fizzBuzz } = require('./fizz-buzz');

describe("fizzBuzz", () => {
  it('returns the number is divisible by 3 and 5, return FizzBuzz', () => {
    const result = fizzBuzz(15);
    expect(result).toEqual('FizzBuzz');
  })
})  

  describe("Fizz", () => {
  it('returns the number is divisible by 3, return Fizz', () => {
    const result = fizzBuzz(3);
    expect(result).toEqual('Fizz');
  })
})

describe("Buzz", () => {
  it('should return the number is divisible by 5, return Buzz', () => {
    const result = fizzBuzz(5);
    expect(result).toEqual('Buzz');
  })
})

describe("num", () => {
  it('otherwise, return the number', () => {
    const num = (fizzBuzz(7));
    expect(num).toEqual(num)
  })
})


