const person={
    voornaam: "John",
    achternaam: "Doe",
    leeftijd: 30,
}

console.log(person.voornaam);  
console.log(person["achternaam"]);
console.log(person.leeftijd);


function Employee(name,age,city,m1){
    this.name=name;
    this.age=age;
    this.city=city;
    this.m1=m1;
}




const employee1=new Employee("John",30,"New York",()=>{
    console.log('Hello world');
    return 'Hello world';
});
console.log(employee1.name);
console.log(employee1.age);
console.log(employee1.city);
console.log(employee1.m1());




const employee2=new Employee("Jane",25,"London",()=>{
    console.log('Hello world');
    return 'Hello world';
});
console.log(employee2.name);    
console.log(employee2.age);
console.log(employee2.city);
console.log(employee2.m1());

Employee.prototype.random="Chinna Reddy";

console.log(employee1.random);

const student={
    name:"Alice",
    age:20,
    city:"Paris",
    getDetails:function(){
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
        return `Name: ${this.name}, Age: ${this.age}, City: ${this.city}`;
    }
}
for(const key in student){
    console.log("Demo:"+ student[key]);
}


const values=Object.values(student);
console.log(values);

console.log(student.name);
console.log(student.age);
console.log(student.city);
console.log(student.getDetails());

const x=Symbol('x');
console.log(x);




const car={
    make:"Toyota",
    model:"Camry",  
}

console.log(Object.keys(car));

for(const key in car){
    console.log(key);
    console.log(car[key]);
}
