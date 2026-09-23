class Demo{

    
    constructor(age,name) {
        this.name = age;
        this.age = name;
    }
    getDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Employee extends Demo{
    constructor(age,name,city){
        super(age,name);
        this.city=city;
    }

    getDetails(){
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    }
}

const employee1=new Employee("John",30,"New York");
employee1.getDetails();