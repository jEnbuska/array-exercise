import {forEach} from "../src/array-functions";

describe('forEach', () => {
    test('forEach should be called with every item', () => {
        const acc = [];
        forEach(['a','b','c'], (item) => {
            acc.push(item);
        })
        expect(acc).toStrictEqual(['a', 'b', 'c'])
    })
    test('forEach should be called with all arguments', () => {
        const acc =[]
        forEach(['a','b','c'], (...args) => {
            acc.push(args)
        })
        expect(acc).toStrictEqual([
            ['a', 0, ['a','b','c']],
            ['b', 1, ['a','b','c']],
            ['c', 2, ['a','b','c']],
        ])
    })
})