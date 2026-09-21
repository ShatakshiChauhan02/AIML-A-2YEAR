class Hello {
    name = "Shatakshi";
    show() {
        console.log("Hello " + this.name);
    }
}

let h = new Hello();
h.show();

class Hello1{
    constructor(name) {
        this.name = name;
        this.faculty = "SC";
        console.log("Hello " + this.name);
    }
    show() {
        console.log("Faculty: " + this.faculty);
    }
}
let obj2 = new Hello1("ur");
obj2.show();

class Student{
    constructor(name,rollNo,city,age){
        this.rollNo=rollNo;
        this.name=name;
        this.city=city;
        this.age=age;
        console.log("Roll No: "+this.rollNo);
        console.log("Name: "+this.name);
        console.log("City: "+this.city);
        console.log("Age: "+this.age);
        
    }
}

let s = new Student("Shatakshi", 2503215300184, "UK", 101);
let s1 = new Student("Priya", 2503215300185, "Delhi", 102);
let s2 = new Student("Rahul", 2503215300186, "Mumbai", 103);
let s3 = new Student("Anjali", 2503215300187, "Bangalore", 104);
let s4 = new Student("Amit", 2503215300188, "Lucknow", 105);

console.log(s);
console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);


class Hello3{
    static name="Example of static variable and method";
    static show(){
        console.log("Hello class this is "+Hello3.name);
    }
}
Hello3.show();


class Hello4{
    static name="Example of static method without static variable";
    static show(){
        console.log("Hello class this is "+Hello4.name);
    }
}
Hello4.show();

class Hello5{
    static name="Example of static method with instance varible";
    constructor(){
        this.instanceVar="Instance variable";
    }
    show(){
        console.log("Static variable: "+Hello5.name);
        console.log("Instance variable: "+this.instanceVar);
    }
}
let h5=new Hello5();
h5.show();


class Student2 {
    static info = "Example of static method with instance method without constructor";
    static showStatic() {
        console.log("Hello this is " + this.info);
    }
    showInstance() {
        console.log("This is the instance method running.");
    }
}
Student2.showStatic();
let h6 = new Student2();
h6.showInstance();

class student2{
    static name="Shatakshi";
    static lastName="Chauhan";
    show(){
        console.log("firstname: " + student2.name);
        console.log("lastname: " + student2.lastName);
    }
}

let s5=new student2();
s5.show();


