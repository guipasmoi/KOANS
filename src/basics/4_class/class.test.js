import * as exo from "./class";

function Dog(name) {
  this.name = name;
}

test("exo_1 return class Dog", () => {
  const result = exo.exo_1();
  expect(`returned class is named ${result.name}`).toBe(
    "returned class is named Dog"
  );
  const dog = new result("GoodBoy");
  expect(
    dog.name == "GoodBoy"
      ? `class has a constructor that set a field 'name' with the first parameter of the constructor`
      : undefined
  ).toBe(
    `class has a constructor that set a field 'name' with the first parameter of the constructor`
  );
  expect(
    typeof dog.bark == "function"
      ? `class has a method named 'bark'`
      : undefined
  ).toBe(`class has a method named 'bark'`);
  expect(dog.bark() == "Woof" ? `bark should return 'Woof'` : undefined).toBe(
    `bark should return 'Woof'`
  );
});

test("exo_1 return class Dog", () => {
  const result = exo.exo_2();
  const dog = new Dog("GoodBoy");
  expect(result).toEqual(dog);
});
