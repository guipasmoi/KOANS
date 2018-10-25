import * as part1 from "./part1";

const buildConsole = () => {
  const console = {
    log: jest.fn(x => x)
  };
  return console;
};

test("exo1", () => {
  const console = buildConsole();
  const result = part1.exo1(console);
  expect(result).toMatchSnapshot();
});

test("exo2", () => {
  const console = buildConsole();
  const result = part1.exo2(console);
  expect([1, 2, 3].map(x => x + 1)).toMatchSnapshot();
});

test("exo3", () => {
  const result = part1.exo3();
  expect(result).toMatchSnapshot();
});

test("exo4", () => {
  part1.exo4();
  expect([1, 2, 3].map(x => x + 1)).toMatchSnapshot();
});

test("exo5", () => {
  const result = part1.exo5();
  expect(result).toMatchSnapshot();
});

test("exo6", () => {
  const result = part1.exo6();
  expect(result).toMatchSnapshot();
});

test("exo7", () => {
  const result = part1.exo7();
  expect([1, 2, 3].filter(x => x > 2)).toMatchSnapshot();
});

test("exo8", () => {
  const result = part1.exo8();
  expect(result).toMatchSnapshot();
});

test("exo9", () => {
  const result = part1.exo9();
  expect(result).toMatchSnapshot();
});

test("exo10", () => {
  part1.exo10();
  expect([[1, 2, 3], [4, 5, 6], [7, 8, 9]].concatAll()).toMatchSnapshot();
});

Array.prototype.concatAll = function concatAll() {
    let results = [];
    this.forEach(subArray => {
        // ------------ INSERT CODE HERE! ----------------------------
        // Add all the items in each subArray to the results array.
        results = results.concat(subArray);
        // ------------ INSERT CODE HERE! ----------------------------
    });
    return results;
};

test("exo11", () => {
    const result = part1.exo11();
    expect(result).toMatchSnapshot();
});
