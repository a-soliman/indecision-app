class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGretting() {
        return `Hi. I am ${this.name}`;
    }

    getDescribtion() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major; 
    }

    hasMajor() {
        return !!this.major;
    }
}

const person1 = new Person('Andrew', 26);
const student1 = new Student('Jack', 20, 'Computer Science');

console.log(person1);
console.log(student1);