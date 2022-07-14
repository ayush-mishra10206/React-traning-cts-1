var customer = {
    firstName: 'ayush',
    lastName: 'mishra',
    sayHi: function () { return 'Hi there'; }
};
console.log('FirstName : ', customer.firstName);
console.log('FirstName : ', customer.lastName);
console.log('FirstName : ', customer.sayHi());
var options = {
    program: 'test1',
    comandLine: function () { return 'hello'; }
};
console.log('options.program : ', options.program);
var fn = options.comandLine;
console.log('options.commandLine : ', fn());
