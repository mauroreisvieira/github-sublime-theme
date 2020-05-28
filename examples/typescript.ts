export default class Animal {
    private name : String;
    private age : Number;
    private options : Object;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.options = {
            age: this.age,
            name: this.name,
        }

        for (let i = 0; i < this.age; i++) {
            console.log('Counter:' + i);
        }
    }

    public move(meters: Number): any {
        if (typeof meters === "number") {
            console.log(this.name + " moved " + meters + "meters.");
        }
        return meters;
    }
}

class Horse extends Animal {
    public move(): void {
        console.log("Galloping...");
        super.move(45);
    }
}

const tom: Animal = new Horse("Tommy the Palomino", 10);
tom.move(34)
