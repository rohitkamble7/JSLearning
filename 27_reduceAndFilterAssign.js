

console.log(`============== Assignment On Filter And Reduce Method===============`);

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
    
    
    const arrayEmps = [emp_anil,emp_radha, emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

    console.log(`-------------------Employee From Wipro Company----------------------------`);

    let EmpWipro= arrayEmps.filter((currentValue)=>{

        return currentValue.emp_company=="Wipro"

    })
    //console.log(`Employee Working In Wipro Company Are: ${EmpWipro}`);

    const empWiprowork = EmpWipro.map((currentValue)=>{

    return currentValue.emp_name

    })
    console.log(`Employee Working In Wipro Company Are: ${empWiprowork}`);
    console.log(`--------------------------------------------------------------------------`);

    let empITHR= arrayEmps.filter((currentValue)=>{

        return currentValue.emp_dept=="IT" || currentValue.emp_dept=="HR";
    })

    let finalITHR= empITHR.map((currentValue)=>{


        return currentValue.emp_name
    })
    console.log(`Employees From Dept IT Or HR Is: ${finalITHR}`);

    console.log(`----------------------------------------------------------------------------`);

    let empId= arrayEmps.filter((currentValue)=>{

        return currentValue.emp_id>50;

    }).map((currentValue)=>{

       return currentValue.emp_name
    })
    console.log(`Employee Whose Emp Id Greater Than 50 Is: ${empId}`);
    console.log(`-----------------------------------------------------------------------------`);


    let nameEmp = arrayEmps.filter((employee)=>{


      
       return employee.emp_name.startsWith("A") || employee.emp_name.startsWith("V") || employee.emp_name.startsWith("M")
    }).map((value)=>{


       return value.emp_name;
    })
    console.log(`Employee Name StartWith "A" ,"V", "M" Is:  ${nameEmp}`);

    console.log(`--------------------------------------------------------------------------------`);

   let empSalary=  arrayEmps.filter((currentValue)=>{

      return  currentValue.emp_salary

    }).map((Value)=>{

      return  Value.emp_salary
    })
    
console.log(`Salary Details Of All Employee ${empSalary}`);

let empTotalSalary= empSalary.reduce((runningTotal,value)=>{

   return runningTotal+value;

})
console.log(`Average Salary Of All employee : ${empTotalSalary/empSalary.length}`);

console.log(`--------------------------------------------------------------------------------------`);


let SalaryOFIt= arrayEmps.filter((employee)=>{

    return employee.emp_dept=="IT"

}).map((Value)=>{

    return Value.emp_salary
})
console.log(`Salary Of IT Departmet Employee :${SalaryOFIt}`);
let avgSalary =SalaryOFIt.reduce((runningTotal,value)=>{

   return runningTotal+value;
})

console.log(`Average Salary Of IT Department Employee : ${avgSalary/SalaryOFIt.length}`);

console.log(`===========================================================================================`);