import * as exo from "./array";

const vegetables = ["Cabbage", "Turnip", "Radish", "Carrot"];
const numbers = [22, 31, 45, 78];
const fruits = ["banana!!!", "apple"];

test("exo_0", () => {
    vegetables.forEach(vegi => {
        expect(exo.exo_0()).toContain(vegi);
    });
});

test("exo_1 Push the string nuts inside the array", () => {
    const result = exo.exo_1([...vegetables]);
    expect(result).toEqual([...vegetables, "Potatoes"]);
});


test("exo_2 Add 1 to each", () => {
    const result = exo.exo_2(numbers);
    expect(result).toEqual([23, 32, 46, 79]);
});

test("exo_2 don t cheat, use the array in parameter", () => {
    const saltedNumber = numbers.map(i => i + Math.floor(Math.random() * 100));
    const result = exo.exo_2(saltedNumber);
    expect(result).toEqual(saltedNumber.map(i => i + 1));
});


test("exo_3 concat array", () => {
    const result = exo.exo_3(vegetables, fruits);
    expect(result).toEqual(vegetables.concat(fruits));
})
})
;
