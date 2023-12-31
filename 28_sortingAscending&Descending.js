console.log(`============== Assignment On Sorting ======================`);

class Employee {
  constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
  }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployess = [
  emp_anil,
  emp_radha,
  emp_rishi,
  emp_sonali,
  emp_monika,
  emp_viny,
  emp_mahi,
];

console.log(
  `--------> Sorting Array In Descending Order Of Employees Id <-----------------`
);

let empDetails = arrayEmployess.sort((emp1, emp2) => {
  return emp1.emp_id > emp2.emp_id ? -1 : 1;
});
arrayEmployess.forEach((currentValue) => {
  console.log(
    `Employee Id:: ${currentValue.emp_id} || Employee Name: ${currentValue.emp_name} || Employee Department: ${currentValue.emp_dept}`
  );
});
console.log(
  `----------------------------------------------------------------------------------------------------------------------------------`
);

console.log(
  `--------> Sorting The Array In Ascending Order Of Employees Department <-----------------`
);
let empDept = arrayEmployess.sort((emp1, emp2) => {
  return emp1.emp_dept > emp2.emp_dept ? 1 : -1;
});
arrayEmployess.forEach((currentValue) => {
  console.log(
    `Employee Id: ${currentValue.emp_id}|| Employee Department: ${currentValue.emp_dept} || Employee Company: ${currentValue.emp_company}`
  );
});

console.log(
  `---------------------------------------------------------------------------------------------------------------------------------`
);

console.log(
  `--------> Sorting The Array In Descending Order Of Employees salary <-----------------`
);

let empSalaryDetails = arrayEmployess.sort((emp1, emp2) => {
  return emp1.emp_salary > emp2.emp_salary ? -1 : 1;
});

empSalaryDetails.forEach((currentValue) => {
  console.log(`Employee Name: ${currentValue.emp_name} ==> Employee Salary: ${currentValue.emp_salary} ==> Employee Company: ${currentValue.emp_company}`
  );
});
