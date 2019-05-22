// FizzBuzz: A classic interview exercise.
// If number is divisible by 3 -> fizz
// if divisible by 5 -> buzz
// if divisible by both 3 and 5 ->fizzBuzz
// if not divisible by either 3 or 5 -> return the number
// anything that isn't a number log out, "not a number"

const fizzBuzz = number => {
    return (
        ((number % 15 === 0) ? 'fizzBuzz' : false) || 
        ((number % 5 === 0) ? 'buzz' : false) ||
        ((number % 3 === 0) ? 'fizz' : false) ||
        ((typeof number === 'number') ? number : false) || 
        ('Not a Number'));
}
console.log(fizzBuzz(7));


