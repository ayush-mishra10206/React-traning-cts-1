function testOptional1(name, age, country) {
    console.log('name : ', name);
    console.log('age : ', age);
    if (country !== undefined) {
        console.log('country : ', country);
    }
}
function testOptional2(name, age, country) {
    if (country === void 0) { country = 'defaultCountry'; }
    console.log('name : ', name);
    console.log('age : ', age);
    if (country !== undefined) {
        console.log('country : ', country);
    }
}
testOptional1('ayush', 25, 'india');
testOptional2('Mishra', 23);
function testRest(name) {
    var num = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        num[_i - 1] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < num.length; i++) {
        sum += num[i];
    }
    console.log('\n\n\n sum :', sum);
    console.log('name : ', name);
}
testRest('ayush', 1, 2, 3);
testRest(10, 10, 10, 10, 10);
var testAnanomus = function (x) {
    console.log('testAna : ', x);
};
testAnanomus(10);
var testLamda = function (x) { return 10 + x; };
console.log('testLamda : ', testLamda(10));
