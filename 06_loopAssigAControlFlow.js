console.log(`=====================Assignment=======================`);


var str=" i am very good IT Developer"
var count =0;
var vowelsCap= "AEIOU";
for (let index = 0; index < str.length-1; index++) {
    
    var char  =str.charAt(index).toUpperCase();
    if (vowelsCap.includes(char)) {
        count=count+1;
    }
}

console.log(`Total numbers of vowels In Given String : ${count}`);

console.log("--------------------------------------------------------------------------");

var result=0
for (let index = 1; index <=5; index++) {
    
 result=result+index*index*index
    
    
}
console.log(`Sum Of Cube Of 1 To 5 : ${result}`);

console.log(`----------------------------------------------------------------------------`);

function addPositionChars( str){


    
for (let index = 0; index < str.length-1; index++) {
    
   if (index%2!==0 && str.charAt(index)!=" ") {
    
   console.log((str.charAt(index)) );

   } 
}

}
console.log("================> 3.1  Odd Position Character <================================================================");
addPositionChars("Hard work always pays back");

console.log("================> 3.2 Odd Position Character   <================================================================");
addPositionChars("Soon i will be UI IT Champ");

console.log(`---------------------------------------------------------------------------------------------------------------`);


