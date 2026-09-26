function m1(a,b){
    console.log('Hello world');
    console.log(a);
    console.log(b.name);
    console.log(b.age);
    console.log(b.m1());
}

m1(5,
    {
     name:'John', 
     age:30,
     m1:function(){
        console.log('Hello world')
    }});


    function m3(){
        console.log("Chinna");
    }