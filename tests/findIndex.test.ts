import {findIndex} from "../src/array-functions";

describe('findIndex', () => {
    test('findIndex should return first match', () => {
        const index = findIndex([1,2,3], (it) => {
            return it === 2
        })
        expect(index).toBe(1);
    })

    test('findIndex should return undefined if match is found', () => {
        const match = findIndex([1,2,3], (it) => {
            return it === 4
        })
        expect(match).toBe(-1);
    })

    test('iteration of list should be stopped after match is found', () => {
        let lastIndex = -1;
        findIndex([1,2,3], (it, index) => {
            lastIndex = index;
            return Boolean(it === 2)
        })
        expect(lastIndex).toBe(1);
    })

    test('findIndex should be called with all arguments', () => {
        const acc = []
        findIndex(['a','b','c'], (...args) => {
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