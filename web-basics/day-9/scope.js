var global_num = 12;
var Number = /** @class */ (function () {
    function Number() {
        this.num_val = 13;
    }
    Number.prototype.storeNum = function () {
        var local_num = 14;
        console.log('function : ', local_num);
    };
    Number.sval = 10;
    return Number;
}());
console.log(global_num);
console.log(Number.sval);
var obj = new Number();
console.log(obj.num_val);
console.log(obj.storeNum());
