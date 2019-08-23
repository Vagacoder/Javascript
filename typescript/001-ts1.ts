class Student {
    fullName: string;

    constructor(public firstName: string, public middleInitial: string, public lastName: string){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person{
    firstName: string;
    lastName: string;
}

function greeter(person:Person){
    return "Hello, " + person.firstName + " " + person.lastName;
}

// var user = "Hello";
// var user = [0, 1, 2];
// var user = {fistName: 'Alex', lastName:'Smith'};
var user = new Student("Alex", "P.", "Smith");

document.getElementById("demo1").innerHTML = greeter(user);