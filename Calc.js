function Calculator(num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
  this.add = () => {
    return this.num1 + this.num2;
  };
  this.subtract = () => this.num1 - this.num2;
  this.multiply = () => this.num1 * this.num2;
  this.divide = () => this.num1 / this.num2;
}
