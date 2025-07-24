//function declaration
function greet(){
    console.log('hello there!')
}
greet();
//function expression
const speak = function(){
    console.log('good day!');
};
speak();

//arguments & parameters
const talk = function(name = 'luigi', time = 'night'){
    console.log(`good ${time} ${name}`);
}
talk('oyku', 'morning');
talk();
const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area; //return 3.14 * radius **2;
};
const a = calcArea(5);
console.log(a);

//arrow function
const calculate = (radius) => {  //const calculate = radius => 3.14 * radius**2;
    return 3.14 * radius ** 2;
};
const calculateArea = calculate(2);
console.log('area is: ', calculateArea);

//arrow function greet
const hello = () => 'hello';
const result = hello();
console.log(result);

//arrow function bill
const bill = (products, tax) => {
    let total = 0;
    for(let i=0; i < products.length; i++){
        total += products[i] + products[i] * tax;
        
    }
    return total;
};

console.log(bill([10,15,30], 0.2));

//methods
const name = 'shaun';
let resultTwo = name.toUpperCase();
console.log(resultTwo);

//callbacks & foreach

const ul = document.querySelector('.people');
let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];
let html = ``;
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
};

people.forEach(logPerson);
people.forEach(function(person){
    html += `<li style="color: purple">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;