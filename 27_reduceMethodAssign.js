console.log(`===============Assignment On Reduce Method================`);


const array_Number = [20,1,40,25,37,49,9,90,60,2,19]


 const sumArray = array_Number.reduce((runningTotal,Value)=>{

return runningTotal+Value;

});
console.log(`Sum Of All Element Using Reduce Method Is: ${sumArray}`);

console.log(`--------------------------------------------------------------`);

console.log(`-------Sum Of Array Using Traditional Way----------------------`);

const array_Numbers = [20,1,40,25,37,49,9,90,60,2,19]

       let sum=0;

for (let index = 0; index < array_Numbers.length; index++) {
    const element = array_Numbers[index];
    sum= sum+element;
}
console.log(`Sum Of All Element Using Traditional For Loop Is: ${sum}`);

console.log(`---------------------------------------------------------------`);


const array_Numberss = [20,1,40,25,37,49,9,90,60,2,19];

 let numDiv5 = array_Numberss.filter((currentValue)=>{

return currentValue%5==0;

})
console.log(`Numbers Which Are Multiple Of 5 Is: ${numDiv5}`);

console.log(`------------Appying Reduce Method-------------------------------`);

let sumOFAll= numDiv5.reduce((runningTotal,Value)=>{

return runningTotal+Value

})

console.log(`Sum Of All Numbers Is: ${sumOFAll}`);

console.log(`=================================================================`);