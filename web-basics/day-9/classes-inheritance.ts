

class Car{
    engine:string;

    constructor(engine:string){
        this.engine = engine;
    }
}

class Model extends Car{
    disp():void{
        console.log('Engine no : ', this.engine)
    }
}

let obj : Model = new Model('X11');

obj.disp();