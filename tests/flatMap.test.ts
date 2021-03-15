import {flatMap} from "../src/array-functions";

describe('flatMap', () => {
    test('flatMap should map arrays to flat list', () => {
        const arr = flatMap([1,2,3], (it) => {
            return [it]
        })
        expect(arr).toStrictEqual([1, 2, 3]);
    })
    test('flatMap should map non arrays to flat list', () => {
        const arr = flatMap([1,2,3], (it) => {
            return it
        })
        expect(arr).toStrictEqual([1, 2, 3]);
    })

    test('flatMap should map mixed items to flat list', () => {
        const arr = flatMap([1,2,[3, 4]], (it) => {
            return it
        })
        expect(arr).toStrictEqual([1, 2, 3, 4]);
    })

    test('flatMap should not mutate given list', () => {
        const list = [1,2,3];
        flatMap(list, (it) => {
            return false;
        })
        expect(list).toStrictEqual([1,2,3]);
    })

    test('flatMap should be called with all arguments', () => {
        const acc = []
        flatMap(['a','b',['c', 'd']], (...args) => {
            acc.push(args)
            return false;
        })
        expect(acc).toStrictEqual([
            ['a', 0, ['a','b',['c', 'd']]],
            ['b', 1, ['a','b',['c', 'd']]],
            [['c', 'd'], 2, ['a','b',['c', 'd']]],
        ])
    })
})
