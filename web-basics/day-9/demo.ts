let a =1;
a='test';

let b:number;
b=2;

function add(a:number, b:number):number{
    return a+b;
}
console.log(add(2,3));
console.log(add(2,'34'));

var str = '1' 
var str2:number = <number> <any> str;
console.log(typeof(str2));
console.log( typeof str)