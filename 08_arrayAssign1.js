

let arrayNumbers = [22,11,44,55,77,33];

for (let index = 0; index < arrayNumbers.length; index++) {

    if (index%2==0) {
       
        const element = arrayNumbers[index];
        console.log(element);
    }
    
    }


    console.log(`==================Sum Of Array===================`);

    let arrayNumbers1 = [22,11,44,55,77,33];

      sum=0;
    for (let index = 0; index < arrayNumbers1.length; index++) {
        const element = arrayNumbers1[index];
        sum=sum+element
        console.log(`${sum}`);
        
    }


    