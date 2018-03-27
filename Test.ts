
class MyClass 
{
    public value:number = 123;
    
    start() 
    {
        console.log("Start----------------------");
    }
}

var example = new MyClass();
//example.stop(); not allowed

interface IMyInterface extends MyClass
{
    stop(): void;
}

MyClass.prototype['stop'] = function () {
    console.log("Stop++++++++++++++++++++" + this.value);
}

var stage2 = <IMyInterface> <any> example; 
stage2.start();
stage2.stop();


class Base
{
    public name:string = "base";

    constructor()
    {

    }
}

class Child extends Base
{
    constructor()
    {
        super();
        this.name = "child";
    }
}

var child1 = new Child();
console.log(child1 instanceof(Child));
console.log(child1 instanceof(Base));

// var test:any = {};
// test.start = ()=>
// {
//     console.log("Dummy start.....");
// };

// var test2 = <MyClass> test; 
// test2.start();
