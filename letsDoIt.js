



let rohit= {

    name: "rohit",
    age: 29,
    add: "pune"
}

let me={

    pincode: 411033,
    landmark: "jay bhavani mandir road",
    houseno: 18,
}

let result =Object.assign(rohit, me);

console.table(result);


let rohit1= {

    name: "rohit",
    age: 29,
    add: "pune"
}
let result1= Object.assign({} ,rohit1);

console.log(result1);



let person={

    name: "priya",
    age: 29,
    add: "Thergaon",
    company: "Reliance",
}

//Object.freeze(person);

person.age=20;
delete person.age

person.city="Osmanabad";



console.log(person);


const myVehicle={

    brand: "ford",
    model: "mustag",
    color: "red"
}


const myCar={

    brand: "maruti",
    model: "balano",
    color: "blue"
}

const mylove= {...myCar, ...myVehicle}

console.log(mylove);