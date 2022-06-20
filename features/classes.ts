class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('bye');
  }

  startDrivingProcess(): void {
    this.honk();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();
