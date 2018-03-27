"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Base = /** @class */ (function () {
    function Base() {
        this.name = "base";
    }
    return Base;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        var _this = _super.call(this) || this;
        _this.name = "child";
        return _this;
    }
    return Child;
}(Base));
var child1 = new Child();
console.log(child1 instanceof (Child));
console.log(child1 instanceof (Base));
// var test:any = {};
// test.start = ()=>
// {
//     console.log("Dummy start.....");
// };
// var test2 = <MyClass> test; 
// test2.start();
//# sourceMappingURL=Test.js.map