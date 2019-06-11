// Spread Operator

// The spread operator allows an iterable (such as an array or a string) to expand into a set, called a receiver - a receiver is crucial, without it, your code will throw an error. Its most common use is combining arrays, instead of using concat().

const hello = 'Hello World';
const world = [... hello];

console.log(world)
//[ 'H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd' ]

const dessert = ['My', 'favorite', 'dessert', 'is', 'pie.']
console.log(...dessert)
//My favorite dessert is pie.