import * as exo from "./function";

test("exo_0", () => {
  expect(typeof exo.exo_0()).toBe("function");
  expect(exo.exo_0()()).toBe(42);
});

test("exo_1 commutative function" , () => {
  expect(`return value is of type ${typeof exo.exo_1()}`).toBe("return value is of type function");
  const has2Params=   exo.exo_1()(999, 99) != exo.exo_1()(1, 0)
      ? false
      : "You should have 2 parameters in the function you return and you should use them";
  expect(has2Params).toBeFalsy();
  expect(exo.exo_1()(0, 1)).toBe(exo.exo_1()(1, 0));
  expect(exo.exo_1()(99, 1)).toBe(exo.exo_1()(1, 99));
});

test("exo_10", () => {
  expect(typeof exo.exo_10()).toBe("function");
  const results = [
    0,
    1,
    1,
    2,
    3,
    5,
    8,
    13,
    21,
    34,
    55,
    89,
    144,
    233,
    377,
    610,
    987
  ];
  results.forEach((result, index) => {
    expect(exo.exo_10()(index)).toBe(result);
  });
});
