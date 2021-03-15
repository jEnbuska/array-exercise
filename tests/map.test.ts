import {map} from "../src/array-functions";

describe('map', () => {
    test('map should map items to new values', () => {
        const arr = map([1,2,3], (it) => {
            return `${it + 1}`
        })
        expect(arr).toStrictEqual(['2', '3', '4']);
    })

    test('map should not mutate given list', () => {
        const list = [1,2,3];
        map(list, (it) => {
            return `${it + 1}`
        })
        expect(list).toStrictEqual([1,2,3]);
    })

    test('map should be called with all arguments', () => {
        const acc = []
        map(['a','b','c'], (...args) => {
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
