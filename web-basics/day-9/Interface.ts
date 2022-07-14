
interface person{
    firstName:string;
    lastName:string;
    sayHi:()=>string;
}

let customer:person = {
    firstName:'ayush',
    lastName:'mishra',
    sayHi:()=>{return 'Hi there'}
}

console.log('FirstName : ', customer.firstName)
console.log('FirstName : ', customer.lastName)
console.log('FirstName : ', customer.sayHi())


interface runOptions{
    program:string;
    comandLine:string|string[]|(()=>string)
}

let options : runOptions={
    program:'test1',
    comandLine:()=>'hello'
}

console.log('options.program : ', options.program);
let fn:any = options.comandLine
console.log('options.commandLine : ', fn());