//singleton - koi v constructor se jb aap bnate hai to singleton ek object bnta hai.
//constructor se bnega to hmesha singleton hi bnega

//object literals

const mySym = Symbol("key1") 

const JsUser = {
    name : "Sahil",
    "full name" : "Md Sahil",
    age : 24,
    [mySym] : "mykey1",
    address : "Muzaffarpur",
    email : "mdsahil45188@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Mondays", "Saturday"]
}

// console.log(JsUser.email); // object ko access krne ka ye v tarika hai pr ye shi tarika nhi hai, iske alawa v ek tarika hai
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

JsUser.email = "Sahil123@gmail.com"
//Object.freeze(JsUser) //ab object ke value ko further change nhi kr skte
JsUser.email = "MdSahikl233.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello friend");
}

JsUser.greetingTwo = function(){
    console.log(`Helo Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());