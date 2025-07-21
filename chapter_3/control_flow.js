for(let i=0; i<5; i++){
    console.log('in loop:', i);
}
console.log('loop finished');

const names = ['shaun', 'mario', 'luigi'];

for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

let i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}
let j = 5;
do{
    console.log('val of j is: ', j);
    j++
}while(j < 5);

const age = 25;
if(age > 20){
    console.log('You are over 20 years old');
}

const ninjas = ['shaun', 'ryu', 'chun-li', 'yoshi'];

if(ninjas.length > 3 ){
    console.log("That's a lot of ninjas");
}

const password = '22sdadsdsadsdasdssdsdsaddsa';

if(password.length >= 12){
    console.log('that password is might strong');
}else if(password.length >= 8){
    console.log('that password is long enough!');
}else{
    console.log('password is not long enough');
}

const grade = 'A';

switch(grade){
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got a B!');
        break;
    default:
        console.log('not a valid grade');
}

//variables & block scope
let year = 2025;

if(true){
    let year = 2020;
    let name = 'shaun';
    console.log('inside 1st code block:', year,name);
}
if(true){
    console.log('inside 2nd code block:', year);
}
console.log('outside code block; ', year);