const a={
    id:101,
    name:"Shatakshi",
    sal:function(){
        console.log("My id is: "+this.id);
        console.log("My name is: "+this.name);
        console.log("My salary is 10000");
    }
};

let c={
    age:20,
    job:"Student",
    details:function(){
        console.log("My age is: "+this.age);
        console.log("My job is: "+this.job);
    }
};