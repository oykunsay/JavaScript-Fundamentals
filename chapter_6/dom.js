const para = document.querySelector('div.error');
console.log(para);

const paras = document.querySelectorAll('p');
console.log(paras);

paras.forEach(para =>{
    console.log(para);
    console.log(para.innerText);
    para.innerText += ' new text';
});


console.log(paras[0]);

// get an element by ID
const title = document.getElementById('page-title');
console.log(title);

// get elements by their class name
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);

// get elements by their tag name
const parasTag = document.getElementsByTagName('p');
console.log(parasTag);

const paraNew = document.querySelector('p');
console.log(paraNew.innerText);
paraNew.innerText = 'ninjas are awesome';

const content = document.querySelector('.content');
console.log(content.innerHTML);
content.innerHTML += '<h2> THIS IS A NEW H2</h2>';

const people = ['mario', 'sasha', 'yoshi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});

const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');
msg.setAttribute('style', 'color: green;');

const titleNew = document.querySelector('h1');
titleNew.setAttribute('style', 'margin: 50px');