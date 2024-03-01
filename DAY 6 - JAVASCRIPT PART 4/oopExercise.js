class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        throw new Error('Method not implemented.');
    }
}

class Rectangle extends Shape {
    displayFormula() {
        console.log(`The Area of  Rectangle is width*height:  ${this.width}*${this.height}`);
    }
    calculateArea() {
        let area = this.width*this.height;
        console.log('the Area is :', area);
    }
}

let shape1 = new Rectangle(5, 9);
shape1.displayFormula();
shape1.calculateArea();