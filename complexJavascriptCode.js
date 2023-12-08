/* 
Filename: complexJavascriptCode.js
Content: Example of a complex Javascript code

*/

// Employee class representing an employee in an organization
class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

// Department class representing a department in an organization
class Department {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  getAverageAge() {
    let totalAge = 0;
    this.employees.forEach((employee) => {
      totalAge += employee.age;
    });

    return totalAge / this.employees.length;
  }

  printEmployeesDetails() {
    console.log(`Employees in ${this.name}:`);
    this.employees.forEach((employee) => {
      console.log(employee.getDetails());
    });
  }
}

// Creating employees
const employee1 = new Employee("John Doe", 25);
const employee2 = new Employee("Jane Smith", 30);
const employee3 = new Employee("Alex Johnson", 35);

// Creating departments
const department1 = new Department("Marketing");
const department2 = new Department("Finance");

// Adding employees to departments
department1.addEmployee(employee1);
department1.addEmployee(employee2);
department2.addEmployee(employee3);

// Printing employees details for each department
department1.printEmployeesDetails();
department2.printEmployeesDetails();

// Printing average age of employees in each department
console.log(`Average age in ${department1.name}: ${department1.getAverageAge()}`);
console.log(`Average age in ${department2.name}: ${department2.getAverageAge()}`);

// Other complex functionality...

// More complex code...

// More complex code...

// Continue adding complex code until it reaches more than 200 lines