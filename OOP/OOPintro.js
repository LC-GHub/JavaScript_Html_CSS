// const navColor = new Color('carrot', [230, 126, 43]);
// const logoColor = new Color('emarald', [46, 204, 113]);
//============Factory function=============
// function makeColor(r,g,b){
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function(){
//         const {r, g, b} =  this;
//         console.log("this is referring to: ", this);
//         return `rgb(${r}, ${g}, ${b})`;
//     };

//     color.hex = function(){
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) +b).toString(16).slice(1);
//     }
//     return color;
// }

// const firstColor = makeColor(35,255,150);
// //firstColor.rgb();


//========constructor functions============


// function Color(r, g, b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
//     // console.log(this)

// }

// Color.prototype.rgb = function () {
//     const { r, g, b } = this;
//     return `rgb(${r}, ${g}, ${b})`
// }

// Color.prototype.hex = function () {
//     const { r, g, b } = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
// }

// const color1 = new Color(40, 50, 60);
// const color2 = new Color(0, 0, 0);


//========JavaScript classes (the mordern way)======
class Color {
    constructor(r, g, b, name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        console.log(this);
    }

    rgb() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`
    }


}

class pet {
    constructor(name, age) {
        console.log("in pet constuctor");
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating`;
    }
}

class Cat extends pet {
    constructor(name, age, liveleft = 9) {
        console.log("in cat constuctor");
        super(name, age); //reference parent class constructor.
        this.liveleft = liveleft;
        console.log(this.name);
    }
    meow() {
        return 'meow';
    }
}

class Dog extends pet {
    bark() {
        return 'woof';
    }

    eat() {
        return `${this.name} scarfs his food`
    }

}