
const {m1:importedM1,m2,m3}=require('./moduleDemo.js');
let x=10;
let y=20;

let String1="Hello";

   const f2=()=>{console.log('Hello world')};


var a=10;

function m1(){
    var a=20;
    console.log(a);
}

let i;
for(i=0;i<6;i++){
    if(i==3){
        continue;
    }
    console.log(i);
}

let a11= [1,2,3,4,5];

for(let i of a11){
    console.log(i);
}




console.log(a);
m1();
importedM1();
m2();
m3();
console.log(f2);
console.log(x);
console.log(typeof x);
console.log(typeof String1);
console.log(x++);

