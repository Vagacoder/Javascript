import 'core-js';

let input = ['a', 'b', 'c', 'd'];
let result = input.map((item) => {return item.toUpperCase()});
let o1 = {
    age: 30,
    getAge: function(){
        console.log(this.age);
    }
}
let o2 = {
    age: 40
}
console.log(result);
o1.getAge();
// o2.getAge();
Object.assign(o2, o1);
o2.getAge();