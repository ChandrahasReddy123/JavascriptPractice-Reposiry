

let a=[];
console.log(typeof a);
a.push("Chandrahas");
a.push("Dinesh");
a.push("Pune");
a.push("Reddy");

let DeletedElementWithSliece=a.splice(1,1,"Dinesh1");
console.log(DeletedElementWithSliece);

console.log(a);

let slicedArray=a.slice(1,3);
console.log(slicedArray);
for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}


let b=[ ];

b.push(["Chandrahas","Dinesh","Pune","Reddy"],["Chandrahas1","Dinesh1","Pune1","Reddy1"],["Chandrahas2","Dinesh2","Pune2","Reddy2"]);
b.push(10,20,30,40,50);
console.log(b);

for(let i=0;i<b.length;i++){

    if(Array.isArray(b[i])){
    for(let j=0;j<b[i].length;j++){
        console.log(b[i][j]);
    }
}else{
        console.log(b[i]);
}
}

let c=[ ];
c.push(10,20,30,40,50);

console.log(c.toString());
console.log(JSON.stringify(c));

console.log(typeof c);

let d=[ ];

d.push({name:'John',age:30,
city:'New York'},{name:'John1',age:31,
city:'New York1'},{name:'John2',age:32,
city:'New York2'});



   let jsonString=JSON.stringify(d);
   console.log(typeof jsonString);

   let object=JSON.parse(jsonString);
   console.log(typeof object);
   console.log(object[0].name);

   let array23=new Array(5,6,7,8,9);
   console.log(array23);
   console.log(array23.length);
   console.log(array23[0]);

   let removedElement = array23.pop();
   console.log(removedElement);
   console.log(array23);
   
   console.log(array23.at(3));


   console.log(a.join(","));

   console.log(a.shift());

   console.log(a);

   console.log(a.unshift("Chandrahas"));


   let fruits = ["Banana", "Orange", "Apple", "Mango"];

   let cars= ["Saab", "Volvo", "BMW"];

   let icecream=["Vanilla","Chocolate","Strawberry"];

   let cars_fruits=fruits.concat(cars,icecream);

    console.log(cars_fruits);

  console.log(fruits.indexOf("Apple"));

let SlicedFruits=  fruits.slice(1,3);

console.log(SlicedFruits);

console.log(fruits.indexOf("Apple2"));

fruits.forEach((value,index,fruitsArray)=>{
    console.log(value,index,fruitsArray);

}
);


let numbers=[20,30,40,50,60];

let numbers1=numbers.filter((value,index,numbersArray)=>{
    if(value>30){
        console.log(value,index,numbersArray);
    }
}
);
console.log(numbers1);
  


