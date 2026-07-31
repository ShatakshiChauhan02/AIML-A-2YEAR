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



// console.log("\n===While Loop===");
// console.log("\n===Do while Loop===");
// console.log("\n===Array===");
// console.log("\n===Const Array===");