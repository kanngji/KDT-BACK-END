// @ts-check

// function Car(brand, color) {
//   this.brand = brand;
//   this.color = color;
//   this.drive = function () {
//     console.log(`${this.brand}의 ${this.color}색 자동차가 주행중입니다.`);
//   };
// }

// console.log(hyundai.brand, hyundai.color);
// porsche.drive();
// toyota.drive();

class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  drive() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행중입니다.`);
  }

  showSpec() {
    console.log(
      `이 차의 브랜드는 ${this.brand}이고, 색상은 ${this.color}입니다.`
    );
  }
}

class ElecCar extends Car {
  constructor(brand, color, fuel) {
    super(brand, color); //brand와 color는 부모껄로 쓸꺼야.
    this.fuel = fuel;
  }

  drive() {
    console.log(
      `${this.brand}의 ${this.color}색 자동차가 ${this.fuel}의 힘으로 주행중입니다.`
    );
  }

  showSpec() {
    super.showSpec();
    console.log(`그리고 이 차는 ${this.fuel}의 힘으로 주행합니다`);
  }

  //   showFuel() {
  //     console.log(`해당 자동차는 ${this.fuel}의 힘으로 주행합니다`);
  //   }
}

const hyundai = new Car('hyundai', 'white');
// hyundai.showSpec();
const porsche = new Car('porche', 'black');
const toyota = new Car('toyota', 'silver');
const tesla = new ElecCar('tesla', 'red', 'electricity');

console.log(hyundai instanceof Car);
console.log(tesla instanceof Car);
// tesla.showSpec();
// console.log(hyundai.brand, hyundai.color);
// porsche.drive();
// toyota.drive();

// console.log(tesla.brand, tesla.color, tesla.fuel);
// tesla.showFuel();
// tesla.drive();
