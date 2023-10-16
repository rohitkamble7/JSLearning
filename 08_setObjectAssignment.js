
console.log(`================Assignment===============================`);


class Bank{

bank_name
location
account_no
ifsc
Interest_rate

constructor(bank_name,location,account_no,ifsc,Interest_rate){

this.bank_name = bank_name
this.location = location
this.account_no = account_no
this.ifsc = ifsc
this.Interest_rate = Interest_rate

}
}

let axixBank = new Bank("axis_bank","Aundh",50556545,"AX0789",'8%');

let sbiBank = new Bank("sbi_bank","Link Road",22335054,"SBI0851","9%");

let iciciBank = new Bank("icici_bank","hinjewadi",22554488,"ICI0752","10%");

let kotakBank = new Bank("kotak_bank","marunji",1855644,"KKB1232","11%");

let hdfcBank = new Bank("hdfc_bank","law road",12324244,"HDF1898","12%");

let punjabBank = new Bank("punjab_bank","Fc_Road",20201478,"PJB1236","13%");

console.log(axixBank);
console.log(sbiBank);
console.log(iciciBank);
console.log(kotakBank);
console.log(hdfcBank);
console.log(punjabBank);

console.log(`====== Adding Object To Set============`);

const BankSet = new Set();
BankSet.add(axixBank)
BankSet.add(sbiBank)
BankSet.add(iciciBank)
BankSet.add(kotakBank)
BankSet.add(hdfcBank)
BankSet.add(punjabBank)

console.log(BankSet);

console.log(`===========================================`);


console.log(`=========Traverse Set Using for of Loop====`);

for (const key of BankSet) {

}
    
    console.log(`Bank Name: ${axixBank.bank_name}   ||  Location Of Bank: ${axixBank.location}`);
    console.log(`Bank Name: ${sbiBank.bank_name}    ||  Location Of Bank: ${sbiBank.location}`);
    console.log(`Bank Name: ${iciciBank.bank_name}  ||  Location Of Bank: ${iciciBank.location}`);
    console.log(`Bank Name: ${kotakBank.bank_name}  ||  Location Of Bank: ${kotakBank.location}`);
    console.log(`Bank Name: ${hdfcBank.bank_name}   ||  Location Of Bank: ${hdfcBank.location}`);
    console.log(`Bank Name: ${punjabBank.bank_name} ||  Location Of Bank: ${punjabBank.location}`);




