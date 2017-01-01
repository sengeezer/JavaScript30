const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#bada55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('hello I am a %s string', 'nice');

// Styled
console.log('%c I am styled', 'font-size:14px');

// warning!
console.warn('oh toes!');

// Error :|
console.error('snow shoes!');

// Info
console.info('very informative!');

// Testing
console.assert(1 === 1, 'false!');

// clearing
if(1 === 2){
    console.clear();
}

// Viewing DOM Elements
const pg = document.querySelector('p');

console.dir(pg);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} year(s) old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('message');
console.count('message');
console.count('message');

// timing
console.time('consuming time');
// time consuming thing
console.info('doing');
