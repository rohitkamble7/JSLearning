
console.log("=================Assignment On Function Constructor===================================");
console.log(`
`);

function Bank(bankName,location, ifsc, branchCode){

this.bankName = bankName;
this.location = location;
this.ifsc = ifsc;
this.branchCode = branchCode;

console.log(`Bank Details: ${this.bankName},${this.location},${this.ifsc},${this.branchCode}`);
}

const sbiBank = new Bank("SBIBank", "Pune","SBIN001","SBI088")
const yesBank = new Bank( "YesBank","Thergaon","YES0002","YS099")
const MahBank = new Bank("MahBank","Hinjeadi","MAHB008","MH01122")
const AxixBank= new Bank ("AxixBank","DangeChowk","Axix005","AX0007")


Bank.prototype.OpenTime="9 AM IST"
Bank.prototype.CloseTime= "6 PM IST"
console.log(`
`);

console.log("=======================================================================================");

console.log(`Opening Time Of SBIBank: ${sbiBank.OpenTime} || Closing Time Of Branch: ${sbiBank.CloseTime}`);
console.log(`---------------------------------------------------------------------------------------`);
console.log(`Branch Name Is: ${AxixBank.bankName} || Closing Time Of Branch: ${yesBank.CloseTime}`);
console.log(`---------------------------------------------------------------------------------------`);
console.log(`Bank Name: ${yesBank.bankName},Branch Code:${yesBank.branchCode} || Opening Time Of Branch: ${yesBank.OpenTime}`);

console.log("=======================================================================================");