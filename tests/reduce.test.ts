import {reduce} from "../src/array-functions";

describe('reduce', () => {
    test('reduce should reduce', () => {
        const result = reduce([1,2,3], (acc, next) => {
            return `${acc}-${next}`;
        }, '')
        expect(result).toBe('-1-2-3')
    })

    test('reduce should reduce', () => {
        reduce([1,2,3], (acc, next) => {
            return `${acc}-${next}`;
        }, '')
    })
    test('reduce should not mutate given list', () => {
        const list = [1,2,3];
        reduce(list, (acc, next) => {
            return `${acc}-${next}`;
        }, '')
        expect(list).toStrictEqual([1,2,3]);
    })

    test('reduce should be called with all arguments', () => {
        const acc = []
        reduce(['a','b','c'], (...args) => {
            acc.push(args)
            return `${args[1]}-value`;
        }, '')
        expect(acc).toStrictEqual([
            ['', 'a', 0, ['a','b','c']],
            ['a-value', 'b', 1, ['a','b','c']],
            ['b-value', 'c', 2, ['a','b','c']],
        ])
    })
})