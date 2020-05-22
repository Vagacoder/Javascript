// * Ch 22 Class inheritance

// ? Ex.1 subclass 
// ? 1.1 subclass constructor must call super
console.log('1.1 subclass constructor must call super ...');
class Point{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return "x: " + this.x + "; y: " + this.y;
    }
    static draw(x, y){
        console.log("draw point at " + x + ", " + y);
    }
}

class ColorPoint extends Point{
    constructor(x, y, color){
        super(x, y);
        this.color = color;
    }
    toString(){
        return "color: " + this.color + "; x: " + this.x + "; y: " + this.y;
    }
}

let p1 = new Point(2, 10);
console.log(p1.toString());
let p2 = new ColorPoint(1, 5, 'Red');
console.log(p2.toString());

// ? 1.2 subclass is instance of superclass
console.log('\n1.2 subclass is instance of superclass ...');
console.log(p2 instanceof Point);

// ? 1.3 static method is also inherited
console.log('\n1.3 static method is also inherited ...');
Point.draw(1,2);
ColorPoint.draw(3,9);

// ? Ex.2 get superclass 
// ? 2.1 get superclass from subclass
console.log('\n2.1 get superclass from subclass ...');
console.log(Object.getPrototypeOf(ColorPoint));
console.log('Note: not from instance, from CLASS');
console.log(Object.getPrototypeOf(p2));

// ? Ex.3 super keyword
// ? 3.1 super as object, in normal method, super => superclass.prototype
console.log('\n3.1 super as object, in normal method, super => superclass.prototype...');
class A{
    constructor(){
        this.p = 2;
    }
}

class B extends A{
    get m(){
        return super.p;
    }
}
console.log('At first, p is defined on instance of A, super.p cannot get it.');
let b = new B();
console.log(b.m);
console.log('now p is defined on prototype of A, super.p can get it.');
A.prototype.p = 49;
console.log(b.m);
console.log(A.prototype);

// ? 3.2 super as object, in static method super => superclass
console.log('\n3.2 super as object, in static method, super => super class.');
class Parent{
    static show(m){
        console.log('static', m);
    }

    show(m){
        console.log('instance', m);
    }
}

class Child extends Parent{
    static show(m){
        super.show(m);
    }
    
    show(m){
        super.show(m);
    }
}

Child.show(1);
let child = new Child();
child.show(2);

// ? Ex.4 prototype
// ? 4.1 prototype of prototype of subclass = prototype of superclass
console.log('\n4.1 prototype of prototype of subclass == prototype of superclass');
console.log(p1.prototype === p2.prototype);
console.log(p1.__proto__ === p2.__proto__);
console.log(p1.__proto__ === p2.__proto__.__proto__);

// ? 4.2 subclass builtin
console.log('\n4.2 subclass builtin ...');
class NewArray extends Array{
    constructor(...args){
        super(...args);
    }
}

var arr1 = new NewArray();
arr1[0] = 9;
console.log(arr1);
arr1.length =0
console.log(arr1);
