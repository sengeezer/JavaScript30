// start with strings, numbers and booleans

// ~~ Copied, not referenced
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const players1 = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.
const team = players;
console.log(players, team);

// You might think we can just do something like this:
team[3] = 'Lux';

// ~~ Referenced
console.log(players);

// however what happens when we update that array?
// now here is the problem!
// oh no - we have edited the original array too!
// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
// one way
const team2 = players1.slice();
team2[3] = 'Lux';

console.log(players1, team2);

// or create a new array and concat the old one in
const team3 = [].concat(players1);

console.log(players1, team3);

// or use the new ES6 Spread
const team4 = [...players1];

console.log(players1, team4);

// ~~ or from
const team5 = Array.from(players1);

console.log(team5);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: 'Es Bos',
  age: 66
};

// and think we make a copy:
const captain = person;
captain.age = 77;

console.log(person, captain);

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 76 });

console.log(cap2);

// We will hopefully soon see the object ...spread
const cap3 = {...person};

console.log(cap3);

// ~~ ^^shallow copy

// Things to note - this is only 1 level deep -
// both for Arrays and Objects. lodash has a cloneDeep method,
// but you should think twice before using it.
const levels = {
  user: 'name',
  last: 'not',
  levels: {
    1: 3,
    2: 3
  }
}

// ~~ could use `cloneDeep`

// could also use shortcut:
const lev1 = JSON.parse(JSON.stringify(levels));

console.log(lev1);
