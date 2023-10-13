console.log(`=============Assignment On JSON================`);
console.log(`=====> Converting Given string To Object <======
`);



let employeeinfo = `{

"name": "Aleix Melon",
"id": "E00245",
"role": ["Dev","DBA"],
"age": 23,
"doj": "11-12-2019",
"married": false,
"address": {

    "street": "32, Laham St.",
    "city": "Innsbruck",
    "country": "Austria"
            },

"referred-by": "E0012"

}`

const InfoOfEmp = JSON.parse(employeeinfo);

console.log(InfoOfEmp);
console.log(`-----------------------------------------------------------------------------`);


const nameDev = InfoOfEmp.role[0];

console.log(`Log In role of Employee Is: ${nameDev}`);

console.log(`------------------------------------------------------------------------------`);

let SplitWord = InfoOfEmp.name.split(" ")

console.log(`Log the Last Name Of Employee Is: ${SplitWord[1]}`);
console.log(`------------------------------------------------------------------------------`);


InfoOfEmp.doj= "11-12-2019"
InfoOfEmp.doj= new Date(InfoOfEmp.doj);

console.log("Joining Year Of Emloyee Is:", InfoOfEmp.doj.getFullYear());

console.log(`------------------------------------------------------------------------------`);







