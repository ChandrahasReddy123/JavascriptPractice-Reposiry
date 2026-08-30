

import { * as localAlias} from 'fs';
let a=10;
let b=20;

function m1(a, b) {
    console.log('Hello world');
    console.log('Sum:', a + b);
}


function m2(a, callback) {
    callback(a);
}

m2(10, (a) => {
    console.log('Hello world');
});

var b;
console.log(typeof b);




