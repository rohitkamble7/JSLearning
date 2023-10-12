

console.log("=================Assignment=====================");


let personalDetail = {

name: "Rohit",
Address: "Pune",
pincode: 411033,
education: "BE(IT)",
hobbies: "Reading",

};

console.log(personalDetail);

let collegeDetails = {

    collegeName: "JSPMs RSCOE",
    collegeAddress: "Pune",
    TotalBranch: 8,
    University:"Pune University",

};
console.log(collegeDetails);

console.log(`============Merging Two Object==================`);

let MergeToObj= Object.assign(personalDetail,collegeDetails)

console.table(MergeToObj);
console.log(`-----------------------------------------------------------------------`);

let arrayFriend= ["Rohan","parag","Ketan","Vicky"]

Object.freeze(arrayFriend)

for (const iterator of arrayFriend) {
    
    console.log(iterator);
}
console.log(`------------------------------------------------------------------------`);

let company ="Codemind technology"

let reverse=""
for (let index = company.length-1; index >0; index--) {
   let count= company.charAt(index)
    if (count==" ") {
        break;
    }
    else{
        reverse=reverse+count
    }
}
console.log(`The Reverse String Is: ${reverse}`);
console.log(`----------------------------------------------------------------------------`);