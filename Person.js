function Person(name, age) {
  this.name = name;
  this.age = age;
  this.compareAge = (obj) => {
    if (this.age < obj.age) {
      return `${obj.name} olden than me`;
    } else if (this.age > obj.age) {
      return `${obj.name} younger than me`;
    } else {
      return `${obj.name} as the same age as me`;
    }
  };
}
