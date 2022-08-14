class Person {

    constructor(name) {
        this.name = name;
    }
    FetchName() {

        console.log(this.name);
    }

}

const Erim = new Person("Erim Emmanuel");
Erim.FetchName();