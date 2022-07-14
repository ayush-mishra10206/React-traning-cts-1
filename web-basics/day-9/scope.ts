let global_num=12;
class Number{
    num_val=13;
    static sval=10;
    storeNum():void{
        let local_num=14;
        console.log('function : ', local_num);
    }
}

console.log(global_num);
console.log(Number.sval);

let obj  = new Number();
console.log(obj.num_val)
console.log(obj.storeNum())
