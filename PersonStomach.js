function Person(name, age) {
  this.stomach = [];
  this.name = name;
  this.age = age;
  this.toString = () => {
    return `${this.name},${this.age}`;
  };
  this.eat = function (...food) {
    if (
      food.every((el) => typeof el === "string") &&
      this.stomach.length + food.length <= 10
    ) {
      this.stomach = [...this.stomach, ...food];
    } else {
      throw new Error("stop eat");
    }
  };
  this.poop = () => {
    this.stomach = [];
  };
}
function Baby(name, age, favoriteToy) {
  Person.call(this);
  this.name = name;
  this.age = age;
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function () {
  return `PLaying with ${this.favoriteToy}`;
};
const an = new Baby("an", 2, "gndak");
console.log(an.eat("chash"));
console.log(an.favoriteToy);
console.log(an.play());
console.log(an);
const a = new Person("ed", 21);
console.log(a);
