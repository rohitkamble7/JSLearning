const num = 7;

function isPrimeNumber(num){

    for (let index = 2; index < num; index++) {

        if (num%index==0) {

            return false;

        }

    }

    return true;

}

const result = isPrimeNumber(1);

console.log(`Is Number Prime: ${result}`);




//let prime=[11,54,65,85,44]

//function prime() {
    
//for (let index = 0; index < array.length; index++) {
   // const element = array[index];
    




