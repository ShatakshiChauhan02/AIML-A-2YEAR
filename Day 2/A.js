//Variables
console.log("\n===Variables===");
var text="Shatakshi Chauhan";
console.log(text);

//If else
    console.log("\n===If Else===");
var a=40;
var b=30;
if(a>b)
    console.log("A is greater, value of A=",a);
else
   console.log("B is greater, value of B=",b);


console.log("\n===Function===");
function abes()
{
    console.log("Welcome Students");
    console.log("Welcome to Node.js");

}
abes();
console.log("\n===Function with Parameters===");
function greet(fname,lname)
{
    console.log("Hello",fname,lname);
}
greet("Shatakshi","Chauhan");

console.log("\n===Return Function===");
function add(x,y)
{
    return x+y;
}
var result=add(20,30);
console.log("Sum=",result);


console.log("\n===Default Arguments===");
function fullName(fname="ABES",lname="Engineering College")
{
    return fname+" "+ lname;
}
console.log(fullName());
console.log(fullName("Shatakshi","Chauhan"));


console.log("\n===Percentage===");
function totalMarks(maths,english,science)
{
    return maths+english+science;
}
function percentage(total)
{
    return (total/300)*100;
}
var total=totalMarks(80,75,90);
console.log("Total Marks=",total);
console.log("Percentage=",percentage(total)+"%");


console.log("\n===While Loop===");
let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

console.log("\n===Do while Loop===");
let j = 1;

do {
    console.log(j);
    j++;
} while (j <= 5);


console.log("\n===Array===");
let arr= [10, 20, 30, 40, 50];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}

console.log("Total Sum:", sum);


console.log("\n===Const Array===");
const students = [
    ["Shatakshi", "Chauhan", 18, 90],
    ["Sam", "Sharma", 19, 85],
    ["Shiva", "Singh", 18, 95]
];

for (let i = 0; i < students.length; i++) {
    console.log(
        "FirstName:", students[i][0],
        "LastName:", students[i][1],
        "Age:", students[i][2],
        "Marks:", students[i][3]
    );
}



console.log("\n===Object===");
const student = {
    Name: "Shatakshi",
    Age: 18,
    College: "ABES Engineering College"
};

console.log(student);


console.log("\n===Array Of Object===");
const studs = [
    {
        Name: "Shatakshi",
        Age: 18,
        College: "ABES Engineering College"
    },
    {
        Name: "Sam",
        Age: 19,
        College: "ABES Engineering College"
    },
    {
        Name: "Shiva",
        Age: 18,
        College: "ABES Engineering College"
    }
];

console.log(students);



console.log("\n===Object Methods===");
const employee = {
    id: 101,
    name: "Shatakshi",
    department: "AIML",

    display: function() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Department:", this.department);
    }
};

employee.display();

console.log("\n===Add Delete Object Property===");
let studentData = {
    name: "Shatakshi",
    age: 18
};

console.log(studentData);

// Adding property
studentData.course = "BTech";
console.log(studentData)

// Deleting property
delete studentData.age;

console.log(studentData);

