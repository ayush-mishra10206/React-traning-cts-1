class PrinterClass{
    doPrint():void{
        console.log('doPrint() from parent class')
    }
}

class ChildPrintClass extends PrinterClass{
    doPrint():void{
        super.doPrint()
        console.log('domprint from child class');
    }
}

var obj1 = new ChildPrintClass();
obj1.doPrint();