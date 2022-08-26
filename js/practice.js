// const { receiveMessageOnPort } = require('worker_threads');

// class Shape {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   getArea() {
//     return this.width * this.height;
//   }
// }

// const shape = new Shape(3, 4);
// console.log(shape.getArea());

// class Rectangle extends Shape {}
// class Circle extends Shape {
//   constructor(radius) {}
//   getArea() {
//     return radius * radius * 3.14;
//   }
// }
// const rec = new Rectangle(4, 4);
// console.log(rec.getArea());

// const cir = new Circle(4);
// console.log(cir.getArea());

//p44

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }

  getArea() {
    return 3.14 * this.radius ** 2;
  }
}

const shape = new Shape(5, 5);
const rectangle = new Rectangle(4, 4);
const triangle = new Triangle(4, 4);
const circle = new Circle(4, 4, 2);

console.log(
  shape.getArea(),
  rectangle.getArea(),
  triangle.getArea(),
  circle.getArea()
);
