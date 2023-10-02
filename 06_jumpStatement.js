// break

//for (let index = 0; index < 20; index++) {

   // console.log(index);

    //if (index==10) {

       // break;

    //

    //console.log("logged index value");



 

//continue

for (let index = 0; index < 20; index++) {

    console.log(index);

    if (index==10) {

        continue; 
    }
    

    console.log("logged index value continues"); 
    
}




for (let index = 15; index <=30; index++) {
   console.log(index);

   
if (index==20) {
    

    break;
}

console.log(`print values`);
}


console.log(`---------------------------------------------------------------`);

var index=1
do {

    console.log(index);
  index=index+1
    
} while (index<=15);



for (let index = 100; index>=10; index=index-10) {
    console.log(index);

    if (index==50) {
        
        continue;
    
    }
    console.log(`print correct value`);
}