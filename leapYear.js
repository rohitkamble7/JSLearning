console.log(`===============Assignment On Leap Year====================`);


var leapYear=function(year){

var result=+year
if (year==null || year==undefined || isNaN(result)) {

    console.log(`Invalid Data ::: ${year}`);
    
} else {
    if (year%4==0 || year%100!=0 && year%400==0){
       
        console.log(`Yes Its  Leap Year ::: ${year}`);
    } else {
        
        console.log(`Given Year Is Not a Leap Year ::: ${year}`);
    }
    
}



}
leapYear(2020);
console.log(`------------------------------------------------------`);
leapYear(1999);
console.log(`------------------------------------------------------`);
leapYear(1600);
console.log(`------------------------------------------------------`);
leapYear(2022);
console.log(`------------------------------------------------------`);
leapYear(1945);
console.log(`------------------------------------------------------`);
leapYear(null);
console.log(`------------------------------------------------------`);
leapYear("twenty Twenty");
console.log(`------------------------------------------------------`);
leapYear(undefined);
console.log(`------------------------------------------------------`);
leapYear(NaN);
console.log(`------------------------------------------------------`);
leapYear(1750);




