function Student(rollno, firstName, lastName) {
    this.rollno = rollno;
    this.firstName = firstName;
    this.lastName = lastName;

    this.fullNameUsingAnonymous = function () {
        setTimeout(function () {
            // create a new instance of this, hides outer scope of this
            console.log(this.firstName + " " + this.lastName);
        }, 2000);
    };

    this.fullNameUsingArrow = function () {
        setTimeout(() => {
            console.log(this.firstName + " " + this.lastName);
        }, 3000);
    };
}

const s1 = new Student(101, "John", "Doe");
s1.fullNameUsingAnonymous();
s1.fullNameUsingArrow();
