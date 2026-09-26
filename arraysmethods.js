

let a=[10,20,30,40,50];

let fruits=["Banana","Orange","Apple","Mango"];

a.map((value,index,array)=>{
    console.log(value,index,array);
});

fruits.map((value)=>{
    console.log(value);
});


let b=[10,20,30,40,50];


b.filter((value,index,array)=>{
    if(value>30){
        console.log(value,index,array);
    }
});

let employees=[
    {name:"John",age:30,city:"New York"},
    {name:"Jane",age:25,city:"London"},
    {name:"Bob",age:35,city:"Paris"},
    {name:"Alice",age:28,city:"Tokyo"}
];

b.filter((value,index,array)=>{
   return employees[[value]].age>30;});