

function testOptional1(name:string, age:number,country?:string){
    console.log('name : ', name)
    console.log('age : ', age)

    if(country !== undefined){
        console.log('country : ', country);
    }
}
function testOptional2(name:string, age:number,country:string = 'defaultCountry'){
    console.log('name : ', name)
    console.log('age : ', age)

    if(country !== undefined){
        console.log('country : ', country);
    }
}

testOptional1('ayush', 25, 'india');
testOptional2('Mishra', 23,);


function testRest(name,...num:number[]){
    let sum:number=0;

    for(let i=0;i<num.length;i++){
        sum += num[i]
    }
    console.log('\n\n\n sum :', sum)
    console.log('name : ', name);
}

testRest('ayush',1,2,3);
testRest(10,10,10,10,10);


let testAnanomus = function(x:number){
        console.log('testAna : ',x);
}

testAnanomus(10);

let testLamda = (x:number)=>10+x;
console.log('testLamda : ', testLamda(10));
