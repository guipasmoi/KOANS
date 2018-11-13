// 10: destructuring - array
// To do: make all tests pass, leave the assert lines unchanged!
// Follow the hints of the failure messages!

describe('Destructuring arrays makes shorter code', () => {
    it('extract value from array, e.g. extract 0 into x like so `let [x] = [0];`', () => {
        //// let firstValue = [1];
        let [firstValue] = [1];
        expect(firstValue).toStrictEqual(1);
    });
    it('swap two variables, in one operation', () => {
        let [x, y] = ['ax', 'why'];
        //// [x, y] = [x, y];
        [x, y] = [y, x];
        expect([x, y]).toEqual(['why', 'ax']);
    });
    it('leading commas', () => {
        const all = ['ax', 'why', 'zet'];
        //// const [,z] = all;
        const [,,z] = all;
        expect(z).toEqual('zet');
    });
    it('extract from nested arrays', () => {
        const user = [['Some', 'One'], 23];
        //// const [firstName, surname, age] = user;
        const [[firstName, surname], age] = user;
        const expected = 'Some One = 23 years';
        expect(`${firstName} ${surname} = ${age} years`).toEqual(expected);
    });
    it('chained assignments', () => {
        let c, d;
        //// let a, b = [c, d] = [1, 2];
        let [a, b] = [c, d] = [1, 2];
        expect([a, b, c, d]).toEqual([1, 2, 1, 2]);
    });
    it('in for-of loop', () => {
        //// for (var [a, b] of [[0, 1, 2]]) {}
        for (var [,a, b] of [[0, 1, 2]]) {}
        expect([a, b]).toEqual([1, 2]);
    });
});