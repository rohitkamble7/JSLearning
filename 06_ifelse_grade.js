console.log(`------------Assignment---------------------`);

var voteEligible=function(age){
    var result=+age
    if (age==0 || age<0 || age>=130 || age==null || isNaN(result)) {
        console.log(`invalid data: ${age}`);
    } else {
       if (age<18) {
        console.log(`Sorry!! You are not Allowed for vote as your age:${age} `);
       } else {
        console.log(`Congrats!! You age is  ${age} and You are eligible for Vote`);
       }

    }

}
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);
voteEligible(0);
voteEligible(undefined);
voteEligible(null);