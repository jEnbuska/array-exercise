import {every} from "../src/array-functions";

describe('every', () => {
    test('every should return true every matches', () => {
        const match = every([1,2,3], (it) => {
            return true
        })
        expect(match).toBe(true);
    })

    test('every should return false if not every matches', () => {
        const match = every([1,2,3], (it) => {
            return it <= 2;
        })
        expect(match).toBe(false);
    })

    test('iteration of list should be stopped after some does not match', () => {
        let lastIndex = -1;
        every([1,2,3], (it, index) => {
            lastIndex = index;
            return Boolean(it < 2)
        })
        expect(lastIndex).toBe(1);
    })

    test('every should be called with all arguments', () => {
        const acc = []
        every(['a','b','c'], (...args) => {
            acc.push(args)
            return true;
        })
        expect(acc).toStrictEqual([
            ['a', 0, ['a','b','c']],
            ['b', 1, ['a','b','c']],
            ['c', 2, ['a','b','c']],
        ])
    })
})
