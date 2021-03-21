import {filter} from "../src/array-functions";

describe('filter', () => {
    test('filter should return all matching items', () => {
        const arr = filter([1,2,3], (it) => {
            return Boolean(it % 2)
        })
        expect(arr).toStrictEqual([1, 3]);
    })

    test('filter should not mutate given list', () => {
        const list = [1,2,3];
        filter(list, (it) => {
            return it === 1;
        })
        expect(list).toStrictEqual([1,2,3]);
    })

    test('filter should be called with all arguments', () => {
        const acc = []
        filter(['a','b','c'], (...args) => {
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