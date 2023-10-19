console.log(`================ Assignment On Arrow Function=================================`);
console.log(`--------> Using Arrow Function: No Argument & No Return Value <---------------`);
let arrowFun = ()=>{

    console.log(`                Good Morning, Today is Thursday`);

}
arrowFun();

console.log(`================================================================================`);
console.log(`
`);


console.log(`--------> Performing Muliplication With Given Value Using Arrow Function <-------`);
let multiplication = (num1,num2,num3=1)=>{

    let result= num1*num2*num3;
    console.log(`                 Multiplication Of Given Value Is: ${result}`);

}

multiplication(5,5,2);
multiplication(10,4);
console.log(`
`);

console.log(`--------> Performing Addition With Given Value Using Arrow Function <------------`);

let addition = (num1,num2,num3,num4,num5) => {

let result= num1+num2+num3+num4+num5;
return result;

}
let addResult = addition(100,100,200,349,756);
console.log(`                Addition Of Given Number Is: ${addResult}`);

let StrAdd= addition(" i am ", "learning " , "ES6 ","features ","in depth");
console.log(`                Addition Of Given String Is: ${StrAdd}`);

console.log(`==================================================================================`);