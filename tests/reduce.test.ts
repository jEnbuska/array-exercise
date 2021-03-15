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

    test('map should be called with all arguments', () => {
        const acc = []
        reduce(['a','b','c'], (...args) => {
            acc.push(args)
            return undefined;
        }, '')
        expect(acc).toStrictEqual([
            ['a', 0, ['a','b','c']],
            ['b', 1, ['a','b','c']],
            ['c', 2, ['a','b','c']],
        ])
    })
})