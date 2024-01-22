const name = "Sahil"
const repoCount = 50

//console.log(name +repoCount + " Value");

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);

const gameName = new String('Sahil-hc-com')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne= "    Sahil    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.linkedin.com/in%20mdsahil4518/"

console.log(url.replace('%20', '-'));

console.log(url.includes('Sahil'));

console.log(gameName.split('-'));