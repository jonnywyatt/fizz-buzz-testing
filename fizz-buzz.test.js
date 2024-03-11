const { fizzBuzz } = require("./fizz-buzz");

describe("give FizzBuzz for multiples of 3 and 5", () => {
  it("returns the string fizz-buzz for multiples of 3 and 5", () => {
    const result = fizzBuzz(15);
    expect(result).toEqual("FizzBuzz");
  });
});

describe("give Fizz for 3", () => {
  it("return the string fizz for multiples of 3", () => {
    const result = fizzBuzz(6);
    expect(result).toEqual("Fizz");
  });
});

describe("give Buzz for 5", () => {
  it("return the string buzz for multiples of 5", () => {
    const result = fizzBuzz(10);
    expect(result).toEqual("Buzz");
  });
});

describe("give the number when not divisible by 3 or 5", () => {
  it("return the same number when not a multiple of 3 or 5", () => {
    const result = fizzBuzz(2);
    expect(result).toEqual(2);
  });
});

// 1. write a describe to contain our tests
// 2. add a first test. You could use one of the console.log tests in the other file as a starting point
// 3. run the test with `npm test` to see if it passes
// 4. add another test, and another, and another, until you've tested all the functionality of the fizzBuzz function
