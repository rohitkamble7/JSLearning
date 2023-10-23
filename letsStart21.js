


let arrayNum= [10,20,30,40,50,60]


let arrayat3 =arrayNum[3];

console.log(arrayat3);



arrayNum[4]=100;

console.log(arrayNum);


console.log(arrayNum.length);


console.log(arrayNum[arrayNum.length-1]);

let arrayIndex= arrayNum.indexOf(100);

console.log(arrayIndex);
console.log(`----------------------------------`);

// [10, 20, 30, 40, 100, 60]

for (let index = arrayNum.length-1; index >= 0; index--) {
    const element = arrayNum[index];
    console.log(element);
    
}
console.log(`-----------------------------------------`);
let arrayNum1 = [4,6,7,8,3,2];

for (let index = 0; index < arrayNum1.length; index++) {
    const element = arrayNum1[index];
    
    if (index%2==0) {
        
        console.log(element);
    }
}

console.log(`-----------------------------------------`);


let arraynumbers = [20,15,200,15,14,18]

// Adding  element from last ========> use push method
 

arraynumbers.push(10000);

console.log(arraynumbers);

let arraynumbers1 = [20,15,200,15,14,18,565]
 //removing elemnt from last use pop method


 arraynumbers1.pop();

 console.log(arraynumbers1);




 console.log(`-----------------------------------`);

   
 let array123= [4,6,7,8,3,2]
 let sum=0;
for (let index = 0; index < array123.length; index++) {
    const element = array123[index];
    
     sum=sum+element;
    //sum=+ element;
    console.log(sum);
  
}


for (let index = 0; index <= 20; index++) {
    const element= index
    console.log(element);
}
