function Person(name,age,city){
    this.name=name;
    this.age=age;
    this.city=city;
}

Person.prototype.fullName=function(){
    return this.name+" "+this.city;
}

console.log(Object.getPrototypeOf(Person)==Function.prototype);

console.log(Object.getPrototypeOf(Person));

console.log(typeof Function.prototype);

const person=new Person("chinna","Reddy","Pune");

console.log(person.name);
console.log(person.age);
console.log(person.city);

console.log(person.fullName());

const emp=Object.create(Person);

emp.study=function(){
    console.log("Studying");
     
    return "study";
}

console.log(emp.study());

console.log(this);