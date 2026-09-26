
let a=10;
let b=20;

function m1(a, b) {
    console.log('Hello world');
    console.log('Sum:', a + b);

    {
        let a=30;
        console.log(a);
    }
}
function mul(x,t){
    console.log(x);
    console.log(y);
}

function m2(a, callback) {
    callback(a);
}

m2(10, (a) => {
    console.log('Hello world');
});

var b1=20;
console.log(typeof b);






