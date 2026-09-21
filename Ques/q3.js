class Employee {
    constructor(id, name, basicSalary) {
        this.name = name;
        this.id = id;
        this.basicSalary = basicSalary;
    }

    calculateSalary() {
        return this.basicSalary;
    }
}

class Manager extends Employee {
    constructor(id, name, basicSalary, incentive) {
        super(id, name, basicSalary);
        this.incentive = incentive;
    }

    calculateSalary() {
        return this.basicSalary + this.incentive;
    }
}

let emp1 = new Employee(101, "Shatakshi", 12000);
console.log(emp1.calculateSalary());

let emp2 = new Manager(102, "Rahul", 15000, 5000);
console.log(emp2.calculateSalary());