


let bankSbi = {

    branchAddress: "Pune",
    branchCode: "SBI007",
    ifscCode: "SBI0008",
    Email: "www.sbi.com"

};


let bankLocation= {

    street: "S.B Patil Road",
    city: "PimpriChinchwad",
    pincode: 411033
}

let mergeDetails= Object.assign( bankSbi,bankLocation)

console.table(mergeDetails);
console.log(`---------------------------------------------------------------------------`);

console.log(`Cloning Object By Spread operator`);

bankSbi = { ...bankLocation};   

console.log(bankSbi);

console.log(`----------------------------------------------------------------------------`);

let rateOfInterest = {

    homeLoanInterest: '8%',
    personalLoanInterest: '12%',
    dueInterest: '10%' ,


};

let sbiDetails= Object.assign(bankSbi,bankLocation,rateOfInterest)

console.table(sbiDetails);

console.log(`--------------------------------------------------------------------------------`);
console.log(`----------------Traverse The Merge Object---------------------------------------`);

for (const key in sbiDetails) {
     {
        const element = sbiDetails[key];

        console.log(` ${key}  :: ${element}`);
        
    }
}