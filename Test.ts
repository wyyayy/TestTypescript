
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

// var test:any = {};
// test.start = ()=>
// {
//     console.log("Dummy start.....");
// };

// var test2 = <MyClass> test; 
// test2.start();
