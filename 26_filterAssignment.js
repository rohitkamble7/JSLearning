console.log(`=============== Assignment on Filter Method=============`);

const arraynumbers=[20,11,40,25,37,49,9,90,60,2,19];


const Values = arraynumbers.filter((currentValue)=>{

    return currentValue>50;

})
console.log(`Given Array Values           :: [20,11,40,25,37,49,9,90,60,2,19]`);
console.log(`Numbers Greater Than 50 Is   :: ${Values}`);

console.log(`---------------------------------------------------------------------`);


const evenNumber =arraynumbers.filter((currentValue)=>{

    return currentValue%2==0;

})
console.log(`Given Array Values           :: [20,11,40,25,37,49,9,90,60,2,19]`);
console.log(`Even Numbers From Given Array:: ${evenNumber}`);

console.log(`---------------------------------------------------------------------`);




const oddNumber =arraynumbers.filter((currentValue)=>{

    return currentValue%2!==0;

})
console.log(`Given Array Values           :: [20,11,40,25,37,49,9,90,60,2,19]`);
console.log(`Odd Numbers From Given Array :: ${oddNumber}`);

console.log(`----------------------------------------------------------------------------`);



const divisibleNum =arraynumbers.filter((currentValue)=>{

    return currentValue%5==0;

})
console.log(`Given Array Values           :: [20,11,40,25,37,49,9,90,60,2,19]`);
console.log(`Numbers Which Multiple Of 5  :: ${divisibleNum}`);

console.log(`---------------------------------------------------------------------`);



let result =arraynumbers.filter((currentValue)=>{

return currentValue>=20 && currentValue<=50;

})
console.log(`Given Array Values           :: [20,11,40,25,37,49,9,90,60,2,19]`);
console.log(`Numbers Between 20 & 50 Are  :: ${result}`);

console.log(`---------------------------------------------------------------------------`);