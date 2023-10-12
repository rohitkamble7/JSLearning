



let person = {

name: "Rohit",
age: 29,
pincode: 411033,
ismarried: false

};

console.log(typeof person );

person.pincode
console.log(`Pincode is ${person.pincode}`);

const pincodeValue = person.pincode
console.log(pincodeValue);


person.height = 5.6

console.log(person);

console.table(person);

person.pincode=411017;

console.table(person);


delete person.pincode;

console.table(person);

person.age=30;
console.table(person);

person.hometown= "chinchwad";
console.table(person);