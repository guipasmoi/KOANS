import * as exo from "./module";
import myModule, {
  TheAwserToTheQuestion,
  someObject
} from "./exampleModule/myModule";

import * as a from "./exampleModule/myModule";
test("exo_1 return default myModule from the folder of exmapleModule", () => {
  const result = exo.exo_1();
  expect(result).toBe(myModule);
});

test("exo_2 return TheAwserToTheQuestion myModule from the folder of exmapleModule", () => {
  const result = exo.exo_2();
  expect(result).toBe(TheAwserToTheQuestion);
});

test("exo_3 return SomeObject myModule from the folder of exmapleModule", () => {
  const result = exo.exo_3();
  expect(result).toBe(1);
});
