


let professor = {

name: "Banubakode",
Address: "Pune",
pincode: 411033,
Designation: "HOD",
education: "PHD in Database",
degree:{

    engineering: "CSC",
    PHD: "Advance Computing",
    MasterIn: "Teaching DBMD",
},
certificate: ["Hacker Rank Participation", "Certificate in IFE Course"," Certificate In adv Programming"]
};


console.log(professor);
console.log(`----------------------------------------------------------------------------`);
professor.totalExperience ="14 years";
console.log(professor);
console.log(`-----------------------------------------------------------------------------`);

professor.Address="Mumbai"

console.log(professor);
console.log(`-----------------------------------------------------------------------------`);

professor.certificate.push("Oracle Certified")

console.log(professor);

console.log(`----------------------------------------------------------------------------`);
let result= professor.certificate[professor.certificate.length-1]

console.log(result);
console.log(`-----------------------------------------------------------------------------`);

for (const iterator of professor.certificate) {
    

    console.log(iterator);
}
console.log(`-------------------------------------------------------------------------------`);