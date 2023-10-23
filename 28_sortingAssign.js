console.log(`===================== Assignment On Sorting Method======================`);


const arrayNumbers= [113,45,56,11,32,45,109,799,56,45]

let Reverse =arrayNumbers.reverse();

console.log(`Reverse Array Result Is: ${Reverse}`);
console.log(`------------------------------------------------------------------------`);

let sortedArray= arrayNumbers.sort();

console.log(`Sorting Array Without Any Custom Logic: ${sortedArray}`);
console.log(`-------------------------------------------------------------------------`);

let finalSorted= arrayNumbers.sort((a,b)=>{

    return a>b? 1:-1
})
console.log(`Sorted Array in Ascending Order With Custom Logic: ${finalSorted}`);

console.log(`---------------------------------------------------------------------------`);

let greatestNum =finalSorted[finalSorted.length-1];

console.log(`Greatest Number Among All Is: ${greatestNum}`);
console.log(`---------------------------------------------------------------------------`);

let SmallNum= finalSorted[0];

console.log(`Smallest Number In The Array is: ${SmallNum}`);
console.log(`----------------------------------------------------------------------------`);

let duplicateElemnt =[...new Set(finalSorted)]

console.log(`Removing Dulicate Element from Array:: ${duplicateElemnt}`);

console.log(`===============================================================================`);