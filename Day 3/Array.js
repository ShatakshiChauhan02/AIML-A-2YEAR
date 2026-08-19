console.log("==== String Object ====");

let name = "Shatakshi";
console.log(name);

//String Length

console.log("Length = ",name.length);

//--------------------------------
// String Methods
//--------------------------------

console.log("\n==== String Methods ====");

let str="Welcome JavaScript";

//1.toUpperCase()

console.log("Upper Case = ",str.toUpperCase());

//2.toLowerCase()

console.log("Lower Case = ",str.toLowerCase());

//3. charAt()

console.log("Character at inder 3 = ",str[2]);

//4. indexOf()

console.log("Index of Java = ",str.indexOf("Java"));

//5. lastIndex()

let message = "JavaScript is easy. JavaScript is powerful";

console.log(
    "Last Index = ",
    message.lastIndexOf("JavaScript")
);

//6. slice()

console.log(
    "Slice =",
    str.slice(0,7)
);

//7.split()

let data="HTML,CSS,JavaScript";

let result=data.split(",");

console.log("Split =",result);

//8. replace()

let text="I Love Java";
console.log(
    text.replace("Java","JavaScript")
    );

//9. concat()

let first="Shatakshi";
let last="Chauhan";

console.log(
    first.concat(" ",last)
);

//Includes method
console.log("\n====Includes=====")
let course="JavaScript";
console.log(course.includes("Script"));
console.log(course.includes("Python"));