
console.log(`============= Assignment On Map==========================`);

class Bank{

    bankName
    location
    accountNo
    ifsc
    InterestRate
    
    constructor( bankName,location,accountNo,ifsc,InterestRate){
    
    this.bankName = bankName
    this.location = location
    this.accountNo = accountNo
    this.ifsc = ifsc
    this.InterestRate= InterestRate
    
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

    console.log(`----------------------------------------------------------------------------`);

    console.log(`===========Creating Map Key:accountNo And Value: Object=====================`);

    let map = new Map();
    map.set("50556545", axixBank);
    map.set("22335054", sbiBank);
    map.set("22554488", iciciBank);
    map.set("1855644", kotakBank);
    map.set("12324244", hdfcBank);
    map.set("20201478", punjabBank);
    console.log(map);

    console.log(`-----------------------------------------------------------------------------`);

console.log(`===================Traversing The Map==============================================`);
    let TotalKey = map.keys();
    for (const key of TotalKey) {
        
        const bank= map.get(key)

        console.log(`Bank Name: ${bank.bankName} :: Account No: ${bank.accountNo}  :: Interest Rate: ${bank.InterestRate}`);
        console.log(`-----------------------------------------------------------------------------------------------------`);
    }