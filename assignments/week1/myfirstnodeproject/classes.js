let firstName = "Samantha";

let handmadeObject = {
    firstName: "Gerson",
    lastName:  "Mancilla",
    position: "Cashier",
    location: "San Francisco",
    active: true,
    doWork: function () {
        console.log(this.firstName + " is now working!");
    }
};


class Employee {
    constructor(firstName, lastName, position, workplace) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.position = position;
        this.location = workplace;
        this.active = false;
        this.energyHours = 16; //hours of energy.
        this.checkValues();
        this.sayHello();
    }

    checkValues() {
        if (!(typeof this.active === "boolean")) {
            console.log("This object has an improper value for the active property!");
        }

        if (this.energyHours < 0) {
            this.energyHours = 0;
        } else if (this.energyHours > 24) {
            this.energyHours = 24;
        }
    }

    sayHello() {
        console.log(`Hello! My name is ${this.firstName}. I work as a ${this.position} at ${this.location}. How are you doing today?`)
    }

    doWork(hours) {

        if ( !( Number.isNaN( parseInt(hours) ) ) ) {
            hours = parseInt(hours);
        } else if (typeof hours != "number") {
            console.log("The value for hours is not valid! Can't assign work.");
            return;
        }

        if (this.energyHours - hours < 0) {
            console.log(`${this.firstName} does not have that much energy! They will work for ${this.energyHours} hours instead.`);

            hours = this.energyHours;
            this.energyHours = 0;

        } else {
            // this.energyHours -= hours; same as the line below.
            this.energyHours = this.energyHours - hours;
        }

        console.log(`${this.firstName} works for ${hours} hours. They have ${this.energyHours} hours left of energy.`);
        // console.log(this.firstName + " works for " + hours + " hours.");
    }

    goToSleep(hours) {

        if ( !( Number.isNaN( parseInt(hours) ) ) ) {
            hours = parseInt(hours);
        } else if (typeof hours != "number") {
            console.log("The value for hours is not valid! Can't assign work.");
            return;
        }


        if (hours + this.energyHours > 24) {
            let maxSleepHours = 24 - this.energyHours;
            console.log(`${this.firstName} does not need to sleep for that long! They will sleep for instead ${maxSleepHours} hours`);

            hours = maxSleepHours;
        }

        this.energyHours = this.energyHours + hours;
        console.log(`${this.firstName} goes to sleep for ${hours} hours. They have ${this.energyHours} hours left of energy.`);
        // console.log(this.firstName + " goes to sleep for " + hours + " hours.")
    }
}


let myFirstFactoryObject = new Employee("Gerson", "Mancilla", "OrderTaker", "OmniHotel");
let secondEmployee = new Employee("Cool", "Johnathan", "clerk", "Bank of America");



myFirstFactoryObject.doWork(23);

secondEmployee.doWork("100");

//handmadeObject.doWork();

let thirdEmployee = new Employee("Samantha", "Tech", "Supervisor", "SFMTA");
thirdEmployee.doWork(14);

secondEmployee.goToSleep(200);

// secondEmployee.checkValues();

// let myNumber = 100;
// let myString = "9812mnois" + myNumber + "anmd9uwedmn";
// let myMultiLineString = "fdslkjflk\n
// klsjflksdjf
// lk;sdjfskdlf
// osdklfjs";



// let myStringLiteral = `Hello my name is ${ thirdEmployee.firstName }, how are you doing today?`;
// console.log(myStringLiteral);

// console.log(myFirstFactoryObject, secondEmployee, thirdEmployee);