import { reverse } from '../src/array-functions'

describe('reverse', () => {
    test('reverse should return reversed list', () => {
        const arr = reverse([1,2,3])
        expect(arr).toStrictEqual([3, 2, 1])
    })

    test('reverse should mutate given list', () => {
        const list = [1,2,3]
        reverse(list)
        expect(list).toStrictEqual([3, 2, 1]);
    })
})