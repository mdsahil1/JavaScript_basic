//primitive or non-primitive me difference bs itna h ki data ko kis trh se memory me store
//  krte hai or kis trh se acccess hota h

// Primitive - jitni v primitive type hote h wo call by value hote hai. jb v hm inhe khin
// se khin copy krte hai to inkaa jo address h wo nhi milta hai bs wo data copy krke mil jata hai

// 7 types : String, Number, Booolean, Null, undefined, Symbol and BigInt

const score = 100
const scoreValue=100.6

const IsLoggedIn = false
const outsideTemp = null
let userEmail;

const id= Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);

const bigNumber = 234967434667423454n


// Non-Primitive (Reference type)- ye saari values wo hai jinka reference memory
//me allocate kiya jata hai

// Arrays, Objects, Functions

const heroes = ["doraemon", "caption-america", "iron-man"]
let myDetails = {
    name:"Sahil",
    age:24,
}

const myFunction= function(){
    console.log("Hello md");
}

console.log(typeof myFunction);