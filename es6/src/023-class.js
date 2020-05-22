// * Ch21 Class
// ? Ex.1 constructor
// ? 1.1 ES5 tradition
console.log('1.1 Tradtional way of construction ...');
function Class1(x, y) {
    this.x = x;
    this.y = y;
}

Class1.prototype.toString = function () {
    return '(' + this.x + ', ' + this.y + ')';
}

let obj1 = new Class1(1, 2);
console.log(obj1.toString());

// ? 1.2 ES6 way
console.log('\n1.2 ES6 way of construction ...');
class Class2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

let obj2 = new Class2(1, 2);
console.log(obj2.toString());
console.log(Object.getPrototypeOf(obj2));
console.log(Class2 === Class2.prototype.constructor);
console.log(Class2 === Object.getPrototypeOf(obj2).constructor);

// ? 1.3 all class methods are defined on prototype
console.log('\n1.3 all class methods are defined on prototype of Class ...');
Object.assign(Class2.prototype, {
    print() { console.log(this.x, this.y); },
    toValue() { return this.x + this.y; }
})

obj2.print();
console.log(obj2.toValue());

// ? 1.4 all class methods are non-enumerable
console.log('\n1.4 all class methods are non-enumerable ...');
console.log(Object.keys(obj2));
console.log(Object.getOwnPropertyNames(obj2));
console.log(Object.getOwnPropertyDescriptors(obj2));
console.log('However, class methods are enumerable in class prototype ...');
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj2)));

// ? 1.5 class must have contructor
console.log('\n1.5 a class must have a constructor, default is an empty contructor ...');
class Class3 { }
let obj3 = new Class3();
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj3)));

// ? 1.6 constructor default return this. Other can be returned
console.log('\n1.6 constructor default return this. Other can be returned ...');
class Class4 {
    constructor() {
        return {}
    }
}
let obj4 = new Class4();
console.log(obj4 instanceof Class4);

// ? 1.7 getter and setter in Class
console.log('\n1.7 getter and setter in class ...');
class Class5 {
    constructor(a, b) {
        // this.a = a;
        this.c = b;
    }

    get a() {
        return 'Foo';
    }

    set a(a) {
        this.a = a;
    }

    get b() {
        return this.c;
    }
    set b(v) {
        this.c = 'Baz';
    }
}

let obj5 = new Class5(1, 2);
console.log(obj5.a);
obj5.b = 39;
console.log(obj5.b);

// ? 1.8 attribute expression
console.log('\n1.8 class attribute can obtain name from expression ...');
let methodname = 'getArea';
class Square {
    constructor(length) {
        this.length = length;
    }

    [methodname]() {
        return this.length * this.length;
    }
}

let s = new Square(10);
console.log(s.getArea());

// ? Ex.2 Class expression
// ? 2.1 class expression
console.log('\n2.1 Contructor a class instance using class expression ...');
const MySum = class Sum {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    getSum() {
        return this.a + this.b;
    }
    getClassName() {
        return Sum.name;
    }
}

let sumInstance = new MySum(2, 6);
console.log(sumInstance.getSum());
console.log(sumInstance.getClassName());
console.log(MySum.name);
// console.log(MySum.getName());    // ! error
// console.log(Sum.name)            // ! error

// ? 2.2 instance executed class
console.log('\n2.2 instance executed class ...');
let sumInstance2 = new class {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    getSum() {
        return this.a + this.b;
    }
}(7, 8);

console.log(sumInstance2.getSum());

// ? Ex.3 this keyword in class
// ? 3.1 this inside class point to intance of class
console.log('\n3.1 this keyword class point to instance of class ...');
class Class6 {
    constructor() {
        this.name = 'class 6';
    }
    print() {
        console.log(this.name);
    }
}

let obj6 = new Class6();
obj6.print();
let print6 = obj6.print;
console.log(print6);
// print6();                // ! error, this.name is undefined

// ? 3.2 solution 1: bind the method inside the class
console.log('\n3.2 solution 1: bind the method inside class ...');
class Class7 {
    constructor() {
        this.name = 'class 7';
        this.print = this.print.bind(this);
    }
    print() {
        console.log(this.name);
    }
}
let obj7 = new Class7();
obj7.print();
let print7 = obj7.print;
console.log(print7);
print7();

// ? 3.3. solution 2: using arrow function
console.log('\n3.3 solution 2: using arrow function ...');
class Class8 {
    constructor() {
        this.name = 'class 8';
        this.print = () => {
            console.log(this.name);
        }
    }
}

let obj8 = new Class8();
obj8.print();
let print8 = obj8.print;
console.log(print8);
print8();

// ? Ex.4 static method
// ? 4.1 simple example
console.log('\n4.1 static method of class only for class, not for instance ...');
class Class9 {
    static show() {
        return 'Hello';
    }
}
console.log(Class9.show());
let obj9 = new Class9();
// obj9.show();     // ! error

// ? 4.2 this inside static method pointing to class not instance
console.log('\n4.2 this inside static method points to class, not instance ...');
class Class10 {
    static show() {
        return this.hello();
    }

    static hello() {
        return 'show hello';
    }

    hello() {
        return 'hello world';
    }

}

console.log(Class10.show());

// ? Ex.5 instance attribe define outside of constructor
// ? 5.1 example
console.log('\n5.1 instance attribute defined outside of constructor ...');
class Class11 {
    count = 0;
    getCount() {
        return this.count;
    }
}

let obj11 = new Class11();
console.log(obj11.getCount());


