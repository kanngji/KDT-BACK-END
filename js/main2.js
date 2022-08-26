function Car(brand, color) {
  this.brand = brand;
  this.color = color;

  this.drive = function () {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행중입니다.`);
  };
}

function ElecCar(brand, color, fuel) {
  Car.call(this, brand, color);
  this.fuel = fuel;
  this.drive = function () {
    console.log(
      `${brand}의 ${color}색 자동차가 ${this.fuel}의 힘으로 주행중입니다.`
    );
  };
}

ElecCar.prototype = Object.create(Car.prototype);
ElecCar.prototype.constructor = ElecCar;

const tesla = new ElecCar('tesla', 'red', 'elec');
tesla.drive();
