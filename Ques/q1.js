/*Create a class Student having rollNo, name, and marks. Initialize these properties using a constructor
Create an instance method displayResult() that displays student details and determines whether the
student has passed. Create a static property/method to maintain and display the total number of Student objects created.
Create at least three Student objects and demonstrate all methods.*/

class Student {
    static totalStudents = 0;

    constructor(rollNo, name, marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;
        Student.totalStudents++;
    }

    displayResult() {
        let status = this.marks >= 40 ? "Passed" : "Failed";

        console.log(`Roll_No: ${this.rollNo} | Name: ${this.name} | Marks: ${this.marks} | Status: ${status}`);
    }

    static showTotalStudents() {
        console.log(`\nTotal Student objects created: ${Student.totalStudents}`);
    }
}

let s1 = new Student(1, "Rahul", 85);
let s2 = new Student(2, "Priya", 32);
let s3 = new Student(3, "Amit", 76);
let s4 = new Student(4, "Neha", 91);

s1.displayResult();
s2.displayResult();
s3.displayResult();
s4.displayResult();

Student.showTotalStudents();