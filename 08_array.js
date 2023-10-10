

let array= [10,20,30,40,50,60]

console.log(array);
console.log(typeof array);

var result =array.length
console.log(`length of array is: ${result}`);

let arrayAT0th =array[0];
console.log(arrayAT0th);


let arrayAt3 = array[3];
console.log(arrayAt3);


let lastPosition= array[array.length-1]
console.log(lastPosition);


console.log(`------------updting value of array------------`);


array[3]=77;

console.log(array);


console.log(`===========index of method=============`);

let indexOfArray50= array.indexOf(50);

console.log(indexOfArray50);


console.log(`=============Traverse ARRAY=====================`);

let arraynum=[22,33,44,55,66,100]

for (let index = 0; index < arraynum.length; index++) {
    const element = arraynum[index];
    console.log(element);
    
}

let arraynum1=[22,33,44,55,66,100]

for (let index =arraynum1.length-1; index >=0; index--) {
    const element = arraynum1[index];
    console.log(element);
}


let arraygold=["rohit","rahul","roshan","priya"]

for (let index = 0; index < arraygold.length; index++) {
    const element = arraygold[index];
    console.log(element);
}
console.log(`----------------------------------`);

let arraygold1=["rohit","rahul","roshan","priya"]


for (let index =arraygold1.length-1 ; index>=0; index--) {
    const element = arraygold1[index];
    console.log(element);
    
}

let arrayeven=[10,20,30,40,50,60]

for (let index = 0; index < arrayeven.length; index++) {
    
    if (index%2==0) {
        const element = arrayeven[index];
        console.log(element); 
    }
    
}
 {
  
    
}

let arraynumbers=[33,88,69,45,89,78]

arraynumbers.push(100);

console.log(arraynumbers);


console.log(`===================================================`);

let arraynumbers1=[33,88,69,45,89,78]

arraynumbers1.pop();
console.log(arraynumbers1);

arraynumbers1.unshift(1000);
console.log(arraynumbers1);
console.log(`---------------------------------------------------------`);

arraynumbers1.shift()
console.log(arraynumbers1);


console.log(`==================Splice==========================`);


var arraynumber=[10,55,48,78,60,52]

   let spliceElement= arraynumber.splice(4);

   console.log(spliceElement);


   var arraynumber=[10,55,48,78,60,52]

  let final = arraynumber.splice(3,2)
  console.log(final);


  var arraynumber=[10,55,48,78,60,52]
 var final1= arraynumber.splice(1,3)
 console.log(final1);



 var arraynumber=[10,55,48,78,60,52]

 var result2= arraynumber.splice(0,2)

 console.log(result2);



 var arraySlice =[20,18,34,55,85,85]

arraySlice.splice(2,0,500);
console.log(arraySlice);


var arraySlice =[20,18,34,55,85,85]

arraySlice.splice(3,0,400,500,600)

console.log(arraySlice);












//console.log("============Learn From Sir=======================");//


//let array = [10, 20, 30, 40, 50, 60];//
console.log(typeof array);
console.log(array);

console.log(`Total elements in array is : ${array.length}`);

console.log(`=========== Accessing or updating array element===============`);
let element0thIndex = array[0];
console.log(element0thIndex);
console.log(array[1]);
console.log(array[array.length-1]);
console.log(`Second last element in array is:  ${array[array.length-2]}`);
console.log(`========= Updating an element===========`);
array[1] = 70;
console.log(array);

console.log(`========= indexOf()===========`);
console.log(array.indexOf(30));

console.log(`========= Traversing an array===========`);
let arrayNum = [22, 11, 44, 55, 77, 33];
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    console.log(element); 
}
console.log(`========= Traversing an array in reverse order===========`);
for (let index = arrayNum.length-1; index >=0; index--) {
    const element = arrayNum[index];
    console.log(element);
}

let arrayNums = [22, 11, 44, 55, 77, 33];
console.log(`====== Adding element in last=========`);
arrayNums.push(88);
console.log(arrayNums);

let arrayNumbers = [22, 11, 44, 55, 77, 33];
console.log(`====== Removing element in last=========`);
arrayNumbers.pop();
console.log(arrayNumbers);
console.log(`====== Adding element in first position  =========`);
arrayNumbers.unshift(99);
console.log(arrayNumbers);

let arrayNumberss = [22, 11, 44, 55, 77, 33];
console.log(`====== slice() =========`);
const arraySliced = arrayNumberss.slice(3);
console.log(arraySliced);

const arrayElements = arrayNumberss.slice(1, 4);
console.log(arrayElements);
console.log(`====== splice() =========`);
var arrayNumber = [22, 11, 44, 55, 77, 33];
const splicedElements = arrayNumber.splice(4);
console.log(arrayNumber);
console.log(splicedElements);

console.log(`====== splice() to remove elements with index and delete count =========`);
var arrayNumber = [22, 11, 44, 55, 77, 33];
var removedElements = arrayNumber.splice(2, 2);
console.log(arrayNumber);
console.log(removedElements);

console.log(`====== splice() to insert element =========`);
var arrayNumber = [22, 11, 44, 55, 77, 33];
// Insert element 99 at index 2 ==> [22, 11, 99, 44, 55, 77, 33]
arrayNumber.splice(2,0,99);
console.log(arrayNumber);

console.log(`Insert elements 100, 200, 400 at index 3 and at the time of insertion don't replace any elements`);
var arrayNumber = [22, 11, 44, 55, 77, 33];
// Insert elements 100, 200, 400 at index 3 ==> [22, 11, 44, 100,200,400,55, 77, 33];
arrayNumber.splice(3, 0, 100, 200, 400);
console.log(arrayNumber);

console.log(`Insert an element 500 at index 2 by replacing an element `);
var arrayNumber = [22, 11, 44, 55, 77, 33];
// [22, 11, 500, 55, 77, 33];
arrayNumber.splice(2, 1, 500);
console.log(arrayNumber);

console.log(`Insert an element 700 at index 3 by replacing 2 elements`);
var arrayNumber = [22, 11, 44, 55, 77, 33];
// [22, 11, 44, 700, 33]
arrayNumber.splice(3, 2, 700)
console.log(arrayNumber);
console.log(`for in loop`);
var arrayNumber = [22, 11, 44, 55, 77, 33];
for (const index in arrayNumber) {
    const element=arrayNumber[index];
    console.log(`Index: ${index}, value: ${element}`);
    var arrayNumber=[22,11,44,55,77,33];

}

// MERN Developer - M: Mongo db, E: Express JS, R: Rect, N: NodeJS
// MEAN Developer - M: Mongo db, E: Express JS, A: Rect, N: NodeJS
var arrayNumber = [22, 11, 44, 55, 77, 33];
console.log(`for of loop`);
for (const element of arrayNumber) {
    console.log(element);
}
console.log(`join method`);
const joinedElement = arrayNumber.join(",");
console.log(joinedElement);

console.log(`Resizing an array`);
var arrayNumber = [22, 11, 44, 55, 77, 33];// [22, 11, 44]
arrayNumber.length = 3;
console.log(arrayNumber);


 



