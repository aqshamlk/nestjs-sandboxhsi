/*
* 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
* - Menerima dua buah argumen number, a dan b.
* - Mengembalikan nilai terkecil antara a atau b.
* - Bila nilai keduanya sama, maka kembalikan dengan nilai a
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function minimal(a, b) {
    return a <= b ? a : b;
}
console.log("The smallest number is ".concat(minimal(3, 5))); // 3
console.log("The smallest number is ".concat(minimal(3, 2))); // 2
console.log("The smallest number is ".concat(minimal(3, 3))); // 3
/*
* 2. Buatlah fungsi bernama power dengan ketentuan berikut:
* - Menerima dua buah argumen number, a dan b.
* - Mengembalikan nilai dari hasil perkalian a * a sebanyak b (fungsi kuadrat).
*/
function power(a, b) {
    return Math.pow(a, b);
}
console.log("The result of 7^3 is ".concat(power(7, 3)));
console.log("The result of 3^3 is ".concat(power(3, 3)));
console.log("The result of 4^0.5 is ".concat(power(4, 0.5)));
/*
* 3. Buatlah fungsi bernama penumlahanBilangan dengan ketentuan berikut:
* - Menerima dua buah argument a yang merupakan array dari sebeluh number dan b
hanya menerima kata-kata ganjil dan genap
* - return dari function adalah hasil dari penjumlahan nilai2 tergantung b nya
adalah ganjil / genap
*/
function penjumlahanBilangan(a, b) {
    var sum = 0;
    if (b === "ganjil") {
        a.forEach(function (item) {
            item % 2 === 1 ? sum += item : sum;
        });
    }
    else if (b === "genap") {
        a.forEach(function (item) {
            item % 2 === 0 ? sum += item : sum;
        });
    }
    else {
        throw new Error("Error");
    }
    return sum;
}
console.log(penjumlahanBilangan([1, 2, 3], "ganjil"));
console.log(penjumlahanBilangan([1, 2, 3, 4, 5, 6, 7], "genap"));
console.log(penjumlahanBilangan([1, 2, 3, 4, 5], "ganjil"));
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
var Animal = /** @class */ (function () {
    function Animal(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
    return Animal;
}());
/*
* 5. Buatlah class bernama Rabbit dengan ketentuan:
* - Merupakan turunan dari class Animal
* - Memiliki method:
* - eat yang mengembalikan nilai string "${this.name} yang berumur ${this.age}
sedang makan!"
* - Ketika diinstansiasi, properti isMammal harus bernilai true
*/
var Rabbit = /** @class */ (function (_super) {
    __extends(Rabbit, _super);
    function Rabbit(name, age) {
        return _super.call(this, name, age, true) || this;
    }
    Rabbit.prototype.eat = function () {
        return "".concat(this.name, " yang berumur ").concat(this.age, " sedang makan!");
    };
    return Rabbit;
}(Animal));
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
var Eagle = /** @class */ (function (_super) {
    __extends(Eagle, _super);
    function Eagle(name, age) {
        var _this = _super.call(this, name, age, false) || this;
        _this.speed = 220;
        return _this;
    }
    Eagle.prototype.fly = function () {
        return "".concat(this.name, " yang berumur ").concat(this.age, " sedang terbang!");
    };
    Eagle.prototype.run = function (speed) {
        return "".concat(this.name, " Berlari dengan kecapatan ").concat(speed, " km");
    };
    return Eagle;
}(Animal));
/*
* 7 Buatlah class bernama EagleRun dengan ketentuan:
* - Merupakan turunan dari class Eagle
* - Memiliki method:
* - fly yang mengembalikan nilai string "${this.name} yang berumur ${this.age}
sedang terbang!"
* - runEagle yang mengembalikan menjalakan method run dari class Eangle
*/
var EagleRun = /** @class */ (function (_super) {
    __extends(EagleRun, _super);
    function EagleRun(name, age) {
        return _super.call(this, name, age) || this;
    }
    EagleRun.prototype.fly = function () {
        return "".concat(this.name, " yang berumur ").concat(this.age, " sedang terbang!");
    };
    EagleRun.prototype.runEagle = function () {
        return _super.prototype.run.call(this, this.speed);
    };
    return EagleRun;
}(Eagle));
/*
* 8. Buatlah instance dari class Rabbit bernama "myRabbit" dengan ketentuan:
* - properti name bernilai: "Labi"
* - properti age bernilai: 2
*
* const myRabbit = new Rabbit("Labi", 2);
* myRabbit.eat()); Labi yang berumur 2 sedang makan!
*
*/
var myRabbit = new Rabbit("Labi", 2);
console.log(myRabbit.eat());
/*
* 9. Buatlah instance dari class Eagle bernama "myEagle" dengan ketentuan:
* - properti name bernilai: "Elo"
* - properti age bernilai: 4
*
*
*
* const myEagle = new Eagle("Elo", 4, 220);
myEagle.fly()); Elo yang berumur 4 sedang terbang!
myEagle.run() Error karena method run memiliki access modifier
protected
*/
var myEagle = new Eagle("Elo", 4);
console.log(myEagle.fly());
// console.log(myEagle.run());
/*
* 10. Buatlah instance dari class EagleRun bernama "speedTes" dengan ketentuan:
* - properti name bernilai: "Labi"
* - properti speed bernilai: 220
*
* const speedTes = new EagleRun("Kuku", 220)
* speedTes.runEagle() // Kuku Berlari dengan kecapatan 220 km";
*/
var speedTes = new EagleRun("Kuku", 220);
console.log(speedTes.runEagle());
