const fizzBuzz = (num) => {

  if(num % 3 === 0 && num % 5 === 0) 
  return 'FizzBuzz';

  if (num % 3 === 0) 
  return 'Fizz';

  if(num % 5 === 0) 
  return 'Buzz';

  return num;
}

exports.fizzBuzz = fizzBuzz;

// TESTING THE FUNCTION WITH CONSOLE.LOG

console.log(fizzBuzz(3)); // logs out "Fizz"

console.log(fizzBuzz(5)); // logs out "Buzz"

console.log(fizzBuzz(15)); // logs out "FizzBuzz"

console.log(fizzBuzz(7)); // logs out 7
