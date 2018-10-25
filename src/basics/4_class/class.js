class Dog {
  constructor(name) {
    this.name = name;
  }
  bark() {
    return "Woof";
  }
}

export const exo_1 = () => {
  // please return the expected
  return Dog;
};

export const exo_2 = () => {
    // please return the expected
    return new Dog("GoodBoy")
};