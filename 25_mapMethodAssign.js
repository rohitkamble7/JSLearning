console.log(`=============== Assignment On Map====================`);



const arrayNumber=[20,11,40,25,23,11,9,31,60,2,19]


const addition = arrayNumber.map((currentValue)=>{

return currentValue+10;

})
console.log(`Adding 10 Into Each Element      :: ${addition}`);

console.log(`-------------------------------------------------------------------------------------------`);

const cubeOfElement =arrayNumber.map((currentValue)=>{

    return currentValue*currentValue*currentValue

})

console.log(`Cube of Each Element             :: ${cubeOfElement}`);

console.log(`-------------------------------------------------------------------------------------------`);


const addingIndex = arrayNumber.map((currentValue, index)=>{

return currentValue+index;

})
console.log(`Adding IndexValue To Each Element:: ${addingIndex}`);

console.log(`-------------------------------------------------------------------------------------------`);