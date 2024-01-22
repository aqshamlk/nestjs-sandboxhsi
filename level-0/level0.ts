/* 
* 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
* - Menerima dua buah argumen number, a dan b.
* - Mengembalikan nilai terkecil antara a atau b.
* - Bila nilai keduanya sama, maka kembalikan dengan nilai a
*/

function minimal(a:number, b:number): number {
    return a <= b ? a: b;
}

console.log(`The smallest number is ${minimal(3, 5)}`); // 3
console.log(`The smallest number is ${minimal(3, 2)}`); // 2
console.log(`The smallest number is ${minimal(3, 3)}`) // 3

/*
* 2. Buatlah fungsi bernama power dengan ketentuan berikut:
* - Menerima dua buah argumen number, a dan b.
* - Mengembalikan nilai dari hasil perkalian a * a sebanyak b (fungsi kuadrat).
*/

function power(a:number, b:number): number {
    return a ** b;
}

console.log(`The result of 7^3 is ${power(7, 3)}`);
console.log(`The result of 3^3 is ${power(3, 3)}`);
console.log(`The result of 4^0.5 is ${power(4, 0.5)}`);

/*
* 3. Buatlah fungsi bernama penumlahanBilangan dengan ketentuan berikut:
* - Menerima dua buah argument a yang merupakan array dari sebeluh number dan b
hanya menerima kata-kata ganjil dan genap
* - return dari function adalah hasil dari penjumlahan nilai2 tergantung b nya
adalah ganjil / genap
*/

function penjumlahanBilangan(a: number[], b: string): number {
    let sum = 0;
    if (b === "ganjil") {
        a.forEach((item) => {
            item % 2 === 1 ? sum += item : sum;
        })
    }
    else if (b === "genap") {
        a.forEach((item) => {
            item % 2 === 0 ? sum += item : sum;
        })
    }
    else {
        throw new Error("Error");
    }
    return sum;
}

console.log(penjumlahanBilangan([1,2,3], "ganjil")); // 4
console.log(penjumlahanBilangan([1,2,3,4,5,6,7], "genap")); // 12
console.log(penjumlahanBilangan([1,2,3,4,5], "ganjil")); // 9
// console.log(penjumlahanBilangan([1,2,3,4,5,6,7], "ganj"));  // Error
// console.log(penjumlahanBilangan([1,2,3,4,5,6,7], "positif"));  // Error 


/*
* 4. Buatlah class bernama Animal dengan ketentuan:
* - Memiliki properti:
* - name: string
* - age: int
* - isMammal: boolean
* - Memiliki constructor untuk menginisialisasi properti:
* - name
* - age
* - isMammal
*/

class Animal {
    name: string;
    age: number;
    isMammal: boolean;

    constructor(name: string, age: number, isMammal: boolean) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

/*
* 5. Buatlah class bernama Rabbit dengan ketentuan:
* - Merupakan turunan dari class Animal
* - Memiliki method:
* - eat yang mengembalikan nilai string "${this.name} yang berumur ${this.age}
sedang makan!"
* - Ketika diinstansiasi, properti isMammal harus bernilai true
*/

class Rabbit extends Animal {
    constructor(name: string, age: number) {
        super(name, age, true);
    }

    eat(): string {
        return `${this.name} yang berumur ${this.age} sedang makan!`;
    }
}

/*
* 6. Buatlah class bernama Eagle dengan ketentuan:
* - Merupakan turunan dari class Animal
* - tambahkan properti speed yang merupaakan number dan bernilai 220
* - Memiliki method:
* - fly yang mengembalikan nilai string "${this.name} yang berumur ${this.age}
sedang terbang!"
* - run memiliki argeument speed bernilai number dan mengembalikan nilai
string "${this.name} Berlari dengan kecapatan ${speed} km";" dengan aksesk
modified protected
* - Ketika diinstansiasi, properti isMammal harus bernilai false
*/

class Eagle extends Animal {
    speed: number = 220;

    constructor(name: string, age: number) {
        super(name, age, false);
    }

    fly() : string {
        return `${this.name} yang berumur ${this.age} sedang terbang!`;
    }

    protected run(speed: number): string{
        return `${this.name} Berlari dengan kecapatan ${speed} km`;
    }
}

/*
* 7 Buatlah class bernama EagleRun dengan ketentuan:
* - Merupakan turunan dari class Eagle
* - Memiliki method:
* - fly yang mengembalikan nilai string "${this.name} yang berumur ${this.age}
sedang terbang!"
* - runEagle yang mengembalikan menjalakan method run dari class Eangle
*/

class EagleRun extends Eagle {
    constructor(name: string, age: number) {
        super(name, age);
    }

    fly(): string {
        return `${this.name} yang berumur ${this.age} sedang terbang!`;
    }

    runEagle(): string {
        return super.run(this.speed);
    }
}

/*
* 8. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
* - properti name bernilai: "Labi"
* - properti age bernilai: 2
*/

const myRabbit = new Rabbit("Labi", 2);
console.log(myRabbit.eat()); // Labi yang berumur 2 sedang makan!

/*
* 9. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
* - properti name bernilai: "Elo"
* - properti age bernilai: 4
*/

const myEagle = new Eagle("Elo", 4);
console.log(myEagle.fly()); // Elo yang berumur 4 sedang terbang!
// console.log(myEagle.run()); // Error karena method run memiliki access modifier protected

/*
* 10. Buatlah instance dari class EagleRun bernama "speedTes" dengan ketentuan:
* - properti name bernilai: "Labi"
* - properti speed bernilai: 220
*/

const speedTes = new EagleRun("Kuku", 220);
console.log(speedTes.runEagle()); // Kuku Berlari dengan kecapatan 220 km";
