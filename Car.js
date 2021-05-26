function Car(model, milesPerGalon) {
  this.model = model;
  this.milesPerGalon = milesPerGalon;
  this.tank = 0;
  this.odometr = 0;
  this.distanceCanGo = 0;
}
Car.prototype.fill = function (galon) {
  this.tank += galon;
  this.distanceCanGo = this.milesPerGalon * this.tank;
};
Car.prototype.drive = function (distance) {
  if (this.distanceCanGo < distance) {
    this.odometr += this.distanceCanGo;
    this.distanceCanGo = 0;
    this.tank = 0;
    return `I ran out of fuel at ${this.odometr} miles`;
  } else {
    this.odometr += distance;
    this.tank = (this.distanceCanGo - distance) / this.milesPerGalon;
    this.distanceCanGo -= distance;
    return `I can go  ${this.distanceCanGo} miles`;
  }
};
let bmw = new Car("bmw", 10);
bmw.fill(10);
console.log(bmw.drive(90));
