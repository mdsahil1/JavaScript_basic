function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("L");   
}

//sayMyName()

// function addTwoNumbers(num1,num2){

//     console.log(num1+num2);
// }

function addTwoNumbers(num1,num2){

    // let result = num1 + num2
    // return result
    return num1 + num2
} //return ke baad kuch v likha hua print nhi hota hai

const result=addTwoNumbers(3,6);
//console.log("Result :", result);

function loginUserMessage(username= "Sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Sahil"))

function calculateCartPrice(value1,value2,...num1){
    return num1
}

// ... = rest operator or spread
 
// console.log(calculateCartPrice(200,400,600,8));

const user = {
    username : "Sahil",
    price : 299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "Tahir",
    price: 499
})

const myNewArray =[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));