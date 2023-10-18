
console.log(`==================Assignment==================================`);


const arrayNum= [11,3,4,11,4,7,3];


let uniqueArray  = [... new Set(arrayNum)];

console.log(`Given Array [11,3,4,11,4,7,3]`);

console.log(`After Removing Dulicate Element : ${uniqueArray}`);


console.log(`===============================================================`);



function alternateCase(str) {
   
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            result += str[i].toUpperCase();
        } else {
            result += str[i].toLowerCase();
        }
    }
    return result;
}

const str = "How are you matE";
const Str = alternateCase(str);

console.log(`Given String IS: How are you mate   `);
console.log(`Expected Output IS : ${Str}`);

console.log(`=====================================================================`);