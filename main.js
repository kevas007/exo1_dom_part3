let exo1 = document.querySelectorAll('h2')[0]

console.log(exo1.innerText);

exo1.innerText = `Exercice 1` ;
console.log(exo1.innerText);

let exo3 = exo1.nextElementSibling

console.log(exo1.innerText = `Exercice 1` );

let exo4 = document.querySelector('section').getAttribute("id")

console.log(exo4);

let exo5 = document.querySelector('h1').getAttribute('class');

console.log(exo5);

let exo5_2= document.querySelector('h1').className;

console.log(exo5_2);

let exo6 = document.querySelectorAll('h1');

exo6.forEach(element => {
    console.log(element.className);
});

let exo7 = document.querySelector('input').getAttributeNames()

console.log(exo7);

let exo8 =document.querySelector('input').getAttribute("type")

console.log(exo8);

let exo9 = document.querySelectorAll('#inputPassword3')[0];
exo9.setAttribute("type", "password")
console.log(exo9);

exo9.setAttribute("type","color");

console.log(exo9);
