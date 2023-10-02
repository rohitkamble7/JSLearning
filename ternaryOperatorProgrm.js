

var num=34;

var result= num%2==0 ? "The Number is Even": "the number is odd"

console.log(`The Number is 34: ${result}`);




var vote=function(value){

    if (value==0 || value>=135 || value== null ||value<0) {
        
        console.log(`you are just invalid because value is ${value}`);
    } else {
        
        if (value>=18 )  {
            console.log(`congrats eligible ${value}`);
        } else {
            console.log(`sorry not elogible`);
        }
    }
}


vote(10);
vote(-13);
vote(134);





var marks=function(marks){


    if (marks>=35 || marks==100) {

        console.log(`congrats you are pass`);
    } else {
        console.log(`sorry 55you are fail`);
    }
}

marks(35);
marks(34);
marks(36);
