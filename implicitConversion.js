console.log(`================Assignment- Implicit Conversion================`);

var result;
result="3" + 2;

console.log(`Here "3" is String & 2 is Number`);
console.log(`2(number) Implicit Converted  Into "2"(String)`)
console.log(`With Addition Operator Both concatenate 
Result is: ${result}`);

console.log(`--------------------------------------------------------------------`);

var result;
result="3" + true;

console.log(`Here "3" is String & true is Boolean`);
console.log(`True(Boolean) Implicit Converted  Converted Into String`)
console.log(`With Addition Operator Both concatenate 
Result is: ${result}`);

console.log(`------------------------------------------------------------------------`);

var result;
result="3" + undefined;

console.log(`Here "3" is String &  Second Value us undefined`);
console.log(`with addition undefined treated as String and get concatenate`)
console.log(`Result is: ${result}`);

console.log(`---------------------------------------------------------------------------`);

var result;
result="3" + null;

console.log(`Here "3" is String & null is another value `);
console.log(`null Implicit Converted  as String `)
console.log(`With Addition Operator Both concatenate 
Result is: ${result}`);

console.log(`**********************String Converted To Number**********************`);

var result;
result= '4' - '2'

console.log(`Initially Both Values are String`);
console.log(`"4"(string) Implicit converted to 4(number) and "2" (String) as well.
Result is:${result}`);

console.log(`------------------------------------------------------------------------------------`);
result = '4'-2
console.log(`"4" is String and 2 is Number`);
console.log(`"4" implicit converted to 4(number) with Subtraction
Result:('4'-2)==> ${result}`);

console.log(`---------------------------------------------------------------------------------------`);

result = '4'* 2
console.log(`"4" is String and 2 is Number`);
console.log(`"4" implicit converted to 4(number) with Multiplication
Result:('4'* 2)==> ${result}`);