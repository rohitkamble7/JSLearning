console.log(`*****************Assignment- Implicit Conversion*****************`);

console.log(`=============Boolean Converted to Number===========================`);

console.log(`                    In Boolean true=1 and false=0`);

console.log(`---------------------------------------------------------------------`);

var result;

result= '4'- true;
console.log(`===> ("4" - true) `);
console.log(`===> "4"(String) Implicit Converted to 4(Number) and true(Boolean) Implicit converted to 1(number)
Result:(4-1)==> ${result}`);

console.log(`
`);
var result;

result= 4 + true;
console.log(`===> (4 + true) `);
console.log(`===> True(Boolean) Implicit converted to 1(number)
Result: (4 + true)==> ${result}`);
console.log(`
`);

var result;

result= 4 + false;
console.log(`===> (4 + false) `);
console.log(`===> False (Boolean) Implicit converted to 0(number)
Result: (4 + false)==> ${result}`);

