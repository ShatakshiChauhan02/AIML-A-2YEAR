//Inheritance
class Employee{
    constructor(id,name,basicSalary){
        this.name=name;
        this.id=id;
        this.basicSalary=basicSalary;
    }
    claculateSalary(basicSalary){
        return this.basicSalary;
    }
}

//Call Back Function
function greeUser(name,callback){
    console.log("Hello "+name);
    callback();
}

greeUser("Bob", function(){
    console.log("Callback function executed.");
});

console.log("Start ")
setTimeout(function(){
    console.log("Task Completed")
},2000)

console.log("End")

//Synchronus

console.log(10)
console.log(20)
console.log(40)
console.log(50)

//Async

console.log("Start");

setTimeout(function(){
    console.log("Middle");
}, 2000);
console.log("End");

//other Example

function printName(){
    console.log("Shatakshi")
}
printName();
console.log("Welcome");

function printName(){
    setTimeout(()=>{
        console.log("Shatakshi");
    },2000);
}
printName();

console.log("Welcome"); 

//Promise
let complet=true;

let prom=new Promise(function(resolve,reject){
    if(complet){
        resolve("I am true")
    }else{
        reject("I am not true")
    }
})
console.log(prom);

