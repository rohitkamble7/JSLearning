
console.log(`=================================================== Assignment =========================================================`);


class Employee {

constructor(emp_id, emp_name, emp_dept, emp_salary,emp_company){

this.emp_id= emp_id;
this.emp_name= emp_name
this.emp_dept= emp_dept;
this.emp_salary= emp_salary;
this.emp_company= emp_company;

}

}
const emp_anil = new Employee(22,"Anil","IT", 50000,"TCS");
const emp_radha = new Employee(33,"Radha","HR", 74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance", 47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance", 45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT", 40000,"Wipro");
const emp_viny = new Employee(88,"Vinayak","IT", 75000,"TCS");
const emp_mahi= new Employee(99,"Mahesh","HR", 85000,"Infy");


const arrayEmployee = [emp_anil,emp_radha, emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

console.log(`---------------------> Employee Details Working In TCS <--------------------------------------------------------------`);
arrayEmployee.forEach((employee) => {

    if (employee.emp_company=="TCS") {
    
    
    console.log(`Name Of Employee Is: ${employee.emp_name} :: Company Name Is: ${employee.emp_company}`);
}

})
console.log(`-------------------------------------------------------------------------------------------------------------------------`);
console.log(`-----------------------> Employee Under Finance Department<--------------------------------------------------------------`);
arrayEmployee.forEach((employee) => {
if (employee.emp_dept=="Finance") {
    console.log(`Department Of Employee Is: ${employee.emp_dept} ::Name Of Employee: ${employee.emp_name}`);
}
})

console.log(`---------------------------------------------------------------------------------------------------------------------------`);
console.log(`-----------------------> Employee Details Name Start With 'R'<-------------------------------------------------------------`);

arrayEmployee.forEach((employee) =>{

if (employee.emp_name.startsWith("R")) {
    
    console.log(`Employee Id: ${employee.emp_id} :: Employee name: ${employee.emp_name} :: Department Name: ${employee.emp_dept} :: Employee Salary: ${employee.emp_salary} :: Employee Company: ${employee.emp_company}`);
}

})
console.log(`----------------------------------------------------------------------------------------------------------------------------`);

console.log(`-----------------------> Employee Details Salary Greater Than 75000<--------------------------------------------------------`);

arrayEmployee.forEach((employee)=> {

    if (employee.emp_salary>75000) {
      
        console.log(`Employee Name: ${employee.emp_name} :: Company Name: ${employee.emp_company} :: Salary of Employee:${employee.emp_salary}`);
    }

})
console.log(`---------------------------------------------------------------------------------------------------------------------------`);
console.log(`-----------------------> Employee Details Salary Greater Than Equal 50000 & Dept: 'IT'<------------------------------------`);

arrayEmployee.forEach((employee)=>{

    if (employee.emp_salary>=50000 && employee.emp_dept=="IT") {
        
        console.log(`Employee Id: ${employee.emp_id} :: Employee name: ${employee.emp_name} :: Department Name: ${employee.emp_dept} :: Employee Salary: ${employee.emp_salary} :: Employee Company: ${employee.emp_company}`);
    

    }

})
console.log(`----------------------------------------------------------------------------------------------------------------------------`);
console.log(`-----------------------> Employee Details From Company Infy<----------------------------------------------------------------`);

arrayEmployee.forEach((employee)=>{

    if (employee.emp_company=="Infy") {
        
        console.log(`Employee Id: ${employee.emp_id} :: Employee name: ${employee.emp_name} :: Department Name: ${employee.emp_dept} :: Employee Salary: ${employee.emp_salary} :: Employee Company: ${employee.emp_company}`);

        

    }
})
console.log(`=============================================================================================================================`);