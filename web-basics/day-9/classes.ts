class Car {
    engine: string;


    constructor(engine: string) {
        this.engine = engine
    }


    disp(): void {
        console.log('engine is  : ', this.engine)
    }
}

let obj = new Car('XX11');

console.log('engine name : ', obj.engine);
console.log(obj.disp())
