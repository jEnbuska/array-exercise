import {slice} from "../src/array-functions";

describe('slice', () => {
    test('slice should return a subset of array', () => {
        const result = slice([1,2,3], 1, 2)
        expect(result).toStrictEqual([2])
    })

    test('slice return rest of the items after "start"', () => {
        const result = slice([1,2,3], 1)
        expect(result).toStrictEqual([2, 3])
    })

    test('slice return rest of the no items is end is before start', () => {
        const result = slice([1,2,3], 2, 1)
        expect(result).toStrictEqual([])
    })

    test('slice should return empty list if start end end are the same', () => {
        const result = slice([1,2,3], 2, 2)
        expect(result).toStrictEqual([])
    })

    test('slice should not mutate given list', () => {
        const list = [1,2,3]
        slice(list, 1, 2)
        expect(list).toStrictEqual([1,2,3])
    })
})