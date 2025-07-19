let age = 25;
let year = 2019;

const title = 'Best reads of 2025';
const likes = 30;
const author = 'Mario';

console.log('hello world');

console.log(age,year);

age = 30;
console.log(age);

const points = 100;
console.log(points);

var score = 75;
console.log(score);

let email = 'oykunsay@gmail.com';
console.log(email);

let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);
console.log(fullName[0]);

console.log(fullName.length);
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();

console.log(result, fullName);

let index = email.indexOf('@');
console.log(index);

// concatenation way
let res = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(res);


//template string way
let resNew = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(resNew);

//creating html templates
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;
console.log(html);

let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas);
console.log(ninjas[1]);
console.log(ninjas.length);

let joinNinjas = ninjas.join('-');
console.log(joinNinjas);

let concatNinjas = ninjas.concat(['ken', 'crystal']);
console.log(concatNinjas);

