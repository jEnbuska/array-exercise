import {find} from "../src/array-functions";

describe('find', () => {
    test('find should return first match', () => {
        const match = find([1,2,3], (it) => {
            return it === 2
        })
        expect(match).toBe(2);
    })

    test('find should return undefined if match is found', () => {
        const match = find([1,2,3], (it) => {
            return it === 4
        })
        expect(match).toBe(undefined);
    })

    test('iteration of list should be stopped after some does not match', () => {
        let lastIndex = -1;
        find([1,2,3], (it, index) => {
            lastIndex = index;
            return Boolean(it === 2)
        })
        expect(lastIndex).toBe(1);
    })

    test('find should be called with all arguments', () => {
        const acc = []
        find(['a','b','c'], (...args) => {
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