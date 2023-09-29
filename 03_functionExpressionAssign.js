console.log(`-------------------Assignment-Function Expression--------------------------`);

var square= function(a){

var result= a*a
return result

}
var result=square(5);
console.log(`Given Number :5      :::  its Square is ${result}`);
var result= square(6);
console.log(`Given Number :6      :::  its Square is ${result}`);
var result= square(25);
console.log(`Given Number :25     :::  its Square is ${result}`);
var result = square(100)
console.log(`Given Number :100    :::  its Square is ${result}`);
var result= square(67.89)
console.log(`Given Number :67.89  :::  its Square is ${result}`);
console.log(`--------------------------------------------------------------------------------`);

console.log("Type of Given variable is:", typeof(square));
console.log(`----------------------------------------------------------------------------------`);


var areaOfRectangle=function(length,width){
var result= length*width

return result;

}
var formula=areaOfRectangle(499,917);
console.log(`Area Of Rectangle is: ${formula}`);
console.log(`------------------------------------------------------------------------------------`);

var swapValue=function(Name1,Name2){

    console.log("Before swap ==>",Name1, Name2);
    var temp=Name1;
    Name1= Name2;

    Name2=temp
console.log("After swap ==>",Name1, Name2);
console.log(`----------------------------------------------------------------------------------------`);
}
swapValue("Mahi","Raina")
swapValue(55,77);

console.log(`-----------------------------------------------------------------------------------------`);

var developer=function(){

    var str= "JS the most popular language of internet"

    var totalLength= str.length
    console.log(`A::Total Character Of String Is: ${totalLength}`);
    
    var Character=str.charAt(6);
    console.log(`B::Character at Index 6 Is: "${Character}"`);

    var characterA= str.charAt(11);
    console.log(`C::Character at Index 11 Is:"${characterA}" `);

  var lastChar= str.charAt(str.length-1)
    console.log(`D::Last Character of String: ${lastChar}`);

    var FirstChar=str.charAt(0)
    console.log(`E::First Character of String: ${FirstChar}`);

    var thirdLast= str.charAt(str.length-3)
    console.log(`F::Third Last Character of String: ${thirdLast} `);
    console.log(`----------------------------------------------------------------------------------------`);

    var Word= str.split(" ");

    var totalWord=Word.length
    console.log(`Total Word In Given String: ${totalWord}`);
    var result=totalWord*totalWord
    console.log(`Square Of Total Word In String:${result} `);

    //var p= str.indexOf("t");
    //console.log(p);
}
developer();
