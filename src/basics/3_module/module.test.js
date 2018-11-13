import * as exo from "./module";
import myModule, {
  TheAwserToTheQuestion,
  someObject
} from "./exempleModule/myModule";

import myModuleToComplete, { toto } from "./exempleModule/myModuleToComplete";

test("exo_1 return default myModule.js from the folder of exmapleModule", () => {
  const result = exo.exo_1();
  expect(result).toBe(myModule);
});

test("exo_2 return TheAwserToTheQuestion myModule.js from the folder of exmapleModule", () => {
  const result = exo.exo_2();
  expect(result).toBe(TheAwserToTheQuestion);
});

test("exo_3 return SomeObject myModule.js from the folder of exempleModule", () => {
  const result = exo.exo_3();
  expect(result).toBe(someObject);
});

test("exo_4 modify myModuleToComplete", () => {
  expect(myModuleToComplete).toBe("Joke");
});

test('exo_5 modify myModuleToComplete to add a named export "toto"', () => {
  expect(toto).toBe(2);
});
