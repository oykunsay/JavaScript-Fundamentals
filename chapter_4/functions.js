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