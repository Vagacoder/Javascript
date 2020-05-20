// * Ch21 Class
// ? Ex.1 constructor
// ? 1.1 ES5 tradition
console.log('1.1 Tradtional way of construction ...');
function Class1(x, y){
    this.x = x;
    this.y = y;
}

Class1.prototype.toString = function(){
    return '(' + this.x + ', ' + this.y +')';
}

let obj1 = new Class1(1, 2);
console.log(obj1.toString());

// ? 1.2 ES6 way
console.log('\n1.2 ES6 way of construction ...');
class Class2{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    toString(){
        return '(' + this.x + ', ' + this.y +')';
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
    print(){console.log(this.x, this.y);},
    toValue(){return this.x + this.y;}
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
class Class3{}
let obj3 = new Class3();
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj3)));

// ? 1.6 constructor default return this. Other can be returned
console.log('\n1.6 constructor default return this. Other can be returned ...');
class Class4{
    constructor(){
        return {}
    }
}
let obj4 = new Class4();
console.log(obj4 instanceof Class4);

// ? 1.7 getter and setter in Class
console.log('\n1.7 getter and setter in class ...');
class Class5{
    constructor(a, b){
        // this.a = a;
        this.c = b;
    }

    get a(){
        return 'Foo';
    }

    set a(a){
        this.a=a;
    }

    get b(){
        return this.c;
    }
    set b(v){
        this.c = 'Baz';
    }
}

let obj5 = new Class5(1, 2);
console.log(obj5.a);
obj5.b = 39;
console.log(obj5.b);

