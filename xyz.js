function Vehicle(companyName, modelName, price,engineType){

this.companyName = companyName
this.modelName= modelName
this.price=price
this.engineType=engineType

console.log(`details Of Vehicle Is: ${this.companyName},${this.modelName},${this.price},${this.engineType}`);

}

const Audi= new Vehicle( "Audi","Q8","2Lakh","Automatic")
const BMW= new Vehicle("BMW", "A87", "5Lakh","Manual")


Vehicle.prototype.countryOrigin=" GerMany"
Vehicle.prototype.ParentCompany= "Volksvagen"


console.log(`Origin Of Audi Is: ${Audi.countryOrigin}::: ParentComapny Of BMW Is: ${BMW.ParentCompany}`);





// Find Factorial Of Number//

// 8= 8*7*6*5*4*3*2*1


function factorial(num){


    
    
      sum=1;

for (let index = num; index>=1; index--) {
    sum=sum*index
  console.log(`Factorial Of Num is: ${sum}`);
}
   
}
factorial(3);
factorial(4);


console.log(`====================================================`);


for (let index = 10; index >0; index--) {
  
  console.log(index);

}
console.log(`====================================================`);

let arrayNumber = [10,25,35,58,85,99]


const totalLenghth = arrayNumber.length

console.log(totalLenghth);


let result = arrayNumber[arrayNumber.length-1];

console.log(result);

let aarayAt2 = arrayNumber[2];

console.log(aarayAt2);

let result2 = arrayNumber.slice(3);

console.log(result2);



//let arrayNumber = [10,25,35,58,85,99]


 arrayNumber.splice(2,0,100);

console.log(arrayNumber);

//let arrayNumber = [10,25,100,35,58,85,99]

let removed = arrayNumber.splice(2,2);
console.log(arrayNumber);

console.log(removed);




console.log(`====== splice() to remove elements with index and delete count =========`);
var arrayNumber1 = [22, 11, 44, 55, 77, 33];
var removedElements = arrayNumber.splice(2, 2);
console.log(arrayNumber1);
console.log(removedElements);

console.log(`=====================================================================================`);


let arrayofRk = [22, 11, 44, 55, 77, 33]

//arrayofRk.splice(2);

//console.log(arrayofRk);


arrayofRk.push(300);
console.log(arrayofRk);


arrayofRk.pop();

console.log(arrayofRk);

arrayofRk.unshift(400);
console.log(arrayofRk);

arrayofRk.shift()

console.log(arrayofRk);

arrayofRk.splice(5,1,33333)

console.log(arrayofRk);

arrayofRk.pop();
console.log(arrayofRk);


arrayofRk.splice(2,0,1122)
console.log(arrayofRk);

arrayofRk.splice(2,1,1122)
console.log(arrayofRk);





let shivk = [400, 22, 11, 44, 55, 77, 33]

shivk.splice(2,1,1122)

console.log(shivk);

for (const key of shivk) {
  
  console.log(key);
}
console.log(`================dddd===============`);

for (const index in shivk) {
  
  const element = shivk[index];
    
  console.log(`${index} : ${element}`);
}

