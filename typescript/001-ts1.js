var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
// var user = "Hello";
// var user = [0, 1, 2];
// var user = {fistName: 'Alex', lastName:'Smith'};
var user = new Student("Alex", "P.", "Smith");
document.getElementById("demo1").innerHTML = greeter(user);
