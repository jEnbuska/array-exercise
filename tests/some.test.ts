import {some} from "../src/array-functions";


describe('some', () => {
    test('some should return true if some matches', () => {
        const match = some([1,2,3], (it) => {
            return Boolean(it === 2)
        })
        expect(match).toBe(true);
    })

    test('some should return false if none matches', () => {
        const match = some([1,2,3], (it) => {
            return Boolean(it === 4)
        })
        expect(match).toBe(false);
    })

    test('iteration of list should be stopped after some is found', () => {
        let lastIndex = -1;
        some([1,2,3], (it, index) => {
            lastIndex = index;
            return Boolean(it === 2)
        })
        expect(lastIndex).toBe(1);
    })

    test('some should be called with all arguments', () => {
        const acc = []
        some(['a','b','c'], (...args) => {
            acc.push(args)
            return false;
        })
        expect(acc).toStrictEqual([
            ['a', 0, ['a','b','c']],
            ['b', 1, ['a','b','c']],
            ['c', 2, ['a','b','c']],
        ])
    })
})