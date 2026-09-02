const a = {
    id: 101,
    name: "Shatakshi",

    sal: function() {
        console.log("My id is: " + this.id);
        console.log("My name is: " + this.name);
        console.log("My salary is 10000");
    }
};

a.sal();


let c = {
    age: 20,
    job: "Student",

    details: function() {
        console.log("My age is: " + this.age);
        console.log("My job is: " + this.job);
    }
};

c.details();


const employee = {
    name: "Rahul",
    salary: 15000,

    display: function() {
        console.log("My name is: " + this.name);
        console.log("My salary is: " + this.salary);
    },

    increaseSalary: function(amount) {
        this.salary += amount;
    }
};

employee.display();

employee.increaseSalary(5000);

employee.display();

//Object with multi functions
let d={
    age:20,
    job:"Teacher",
    details:function(){
        console.log("My age is: "+this.age);
        console.log("My job is: "+this.job);
    },
    profile:"assistant professor",
    job_title:function(){
        console.log("My job title is: "+this.job);
        console.log("My profile is: "+this.profile);
    }
}

//--------------same function with different object
function show(){
    console.log("My address is: "+this.address);
    console.log("My city is: "+this.city);;
}
e={
    address:"abes college",
    city:"Ghaziabad",
    show:show
};
f={
    address:"College of Engineering near Crossing Republic",
    city:"Ghaziabad",
    show:show
};

e.show();
f.show();