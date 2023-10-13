function Vehicle(companyName, modelName, price,engineType){

this.companyName = companyName
this.modelName= modelName
this.price=price
this.engineType=engineType

console.log(`details Of Vehicle Is: ${this.companyName},${this.modelName},${this.price},${this.engineType}`);

}

const Audi= new Vehicle( "Audi","Q8","2Lakh","Automatic")
const BMW= new Vehicle("BMW", "A87", "5Lakh","Manual")


Vehicle.prototype.countryOrigin=" GerMany"
Vehicle.prototype.ParentCompany= "Volksvagen"


console.log(`Origin Of Audi Is: ${Audi.countryOrigin}::: ParentComapny Of BMW Is: ${BMW.ParentCompany}`);





// Find Factorial Of Number//

// 8= 8*7*6*5*4*3*2*1


function factorial(num){


    
    
      sum=1;

for (let index = num; index>=1; index--) {
    sum=sum*index
  console.log(`Factorial Of Num is: ${sum}`);
}
   
}
factorial(3);
factorial(4);





