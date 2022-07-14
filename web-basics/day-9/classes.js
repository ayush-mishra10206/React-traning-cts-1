var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp = function () {
        console.log('engine is  : ', this.engine);
    };
    return Car;
}());
var obj = new Car('XX11');
console.log('engine name : ', obj.engine);
console.log(obj.disp());
