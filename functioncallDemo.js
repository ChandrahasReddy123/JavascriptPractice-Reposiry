let person={
    name:"chinna",
    age:"26",
    city:"banglore",
    m2:function m2(){
      return this.name+" "+this.city;
    }

}

let person2={
      name:"chinna2",
      age:30,
      city:"pune"
    

}


function m1(){
     console.log(this.name+"  "+this.city);
}



m1.call(person);


    person.m2.call(person2);