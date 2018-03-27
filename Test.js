"use strict";
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.value = 123;
    }
    MyClass.prototype.start = function () {
        console.log("Start----------------------");
    };
    return MyClass;
}());
var example = new MyClass();
MyClass.prototype['stop'] = function () {
    console.log("Stop++++++++++++++++++++" + this.value);
};
var stage2 = example;
stage2.start();
stage2.stop();
// var test:any = {};
// test.start = ()=>
// {
//     console.log("Dummy start.....");
// };
// var test2 = <MyClass> test; 
// test2.start();
//# sourceMappingURL=Test.js.map