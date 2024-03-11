const { fizzBuzz } = require("./fizz-buzz");

// 1. write a describe to contain our tests
// 2. add a first test. You could use one of the console.log tests in the other file as a starting point
// 3. run the test with `npm test` to see if it passes
// 4. add another test, and another, and another, until you've tested all the functionality of the fizzBuzz function

// test("should if the number is divisible by 5, return Buzz", () => {
//   const result = fizzBuzz(15);
//   expect(result).toEqual("FizzBuzz");
// });

describe("FizzBuzz", () => {
  it("returns the string fizz-buzz for multiples of 3 and 5", () => {
    const result = fizzBuzz(15);
    expect(result).toEqual("FizzBuzz");
  });
});

describe("FizzBuzz", () => {
  it("return the string fizz for multiples of 3", () => {
    const result = fizzBuzz(3);
    expect(result).toEqual("Fizz");
  });
});

describe("FizzBuzz", () => {
    it("return the string for buzz for the mulitple of 5", () => {
        const result = fizzBuzz(10);
        expect(result).toEqual("Buzz")
    })
});

describe("FizzBuzz", () => {
    it("return the number if not multiple of 3 and 5", () =>{
        const result = fizzBuzz(2);
        expect(result).toEqual(2)
    })
})

