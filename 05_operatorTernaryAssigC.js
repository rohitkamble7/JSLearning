console.log("=============Assignment On Ternary Operator=============");

console.log("*********************Step-1*******************************");

function maleMarriageEligibility(gender,age, boyName){

var result= gender=="male" && age>=21 ? `Hey ${boyName} Congratulations!! you are Eligible for Marriage ` 
:`Hey ${boyName} Sorry!! to Inform You are not Eligible for Marriage `

console.log(`---------------------------------------------------------------------`);

return result

}
var result1=maleMarriageEligibility("male",25, "Bill Gates");
console.log(result1);


var result2= maleMarriageEligibility("male",17,"Stew Jobs")
console.log(result2);

console.log(`
`);

console.log("*********************Step-2*******************************");

function femaleMarriageEligibility( gender,age, girlName){

    var result= gender=="Female" &&  age>=18 ? `Hey ${girlName} Many Congrats You are Eligible for Marriage`
    :`Hey ${girlName} Sorry!! You are Not Eligible for Marriage Try Next Time `

    console.log(`---------------------------------------------------------------------`);
    return result
    
}
var Pass=femaleMarriageEligibility("Female",16, "jenifer");
console.log(Pass);

var pass1=femaleMarriageEligibility("Female",27," Malinda Gates")

console.log(pass1);
