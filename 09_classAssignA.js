



class Vehicle{

companyName

modelName

engineType

color

modeOfDriving




constructor(companyName, modelName, engineType, color, modeOfDriving){

this.companyName = companyName
this.modelName = modelName
this.engineType= engineType
this.color = color
this.modeOfDriving = modeOfDriving


}

}

const VehicleTata = new Vehicle ("Tata", "Punch", "Petrol","Blue","Manual")

//console.log(VehicleTata);


const VehicleMahindra = new Vehicle( "Mahindra", "Scorpio", "Diesel", "Black", "Automatic")
//console.log(VehicleMahindra );

const VehicleAudi=new Vehicle("Audi","Q7","Petrol","Red","Automatic")
//console.log(VehicleAudi);

const VehicleSuzuki= new Vehicle( "MarutiSuzuki","Balano","CNG","Greay","Manual")
//console.log(VehicleSuzuki);

const VehicleHyundai= new Vehicle("Hyundai","Creta","Petrol","White","Automatic")
//console.log(VehicleHyundai);

console.log("====================== Traversing An Array =======================================================");
const arrayOfVehicle = [VehicleTata,VehicleMahindra,VehicleAudi, VehicleSuzuki,VehicleHyundai]

for (const element of arrayOfVehicle) {
    
  // console.log(`Brand Information`,element );
  console.log(`Details Of `,element);

}
console.log("====================Step2==========================================================");

class College{

   collegeName
   Address
   Branch
   University


   constructor (collegeName,Address,Branch,University ){

      this.collegeName= collegeName
      this.Address = Address
      this.Branch = Branch
      this.University = University

   }

   display(){

      console.log(`Details Of College:  ${this.collegeName},${this.Address},${this.Branch},${this.University}`);
   }

}

 const jspm = new College( "RSCOE","Tathawade","6","Pune University")

 jspm.display();

const patilCollge= new College( "Dr.D Y Patil","Pimpri","7","Pune University")
patilCollge.display();

const MIT = new College("MIT", "Alandi","8","Pune University")
MIT.display();

const modern = new College("Modern","ShivajiNagar","5","Pune University")
modern.display();
console.log(`--------------------------------------------------------------------------------------------------------------`);
console.log("==========================Traversing An Array====================");

const arraycollge =[jspm,patilCollge,MIT, modern]
for (const key in arraycollge) {
   {
   const element = arraycollge[key];
   console.log(element);
      
   }
}


console.log("============Step No.3 (Function Call)=========================");

function traversObject(objectcollege){

for (const key in objectcollege) {
    {
      const element = objectcollege[key];
      console.log(`${key}:  ${element}`);
   }
}


}

traversObject(jspm);
console.log(`-----------------------------------------------------------------------`);
traversObject(patilCollge);
console.log(`-----------------------------------------------------------------------`);
traversObject(MIT);
console.log(`-----------------------------------------------------------------------`);
traversObject(modern)





