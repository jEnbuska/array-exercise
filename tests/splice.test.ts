import {splice} from "../src/array-functions";

describe('splice', () => {
    test('splice should return removed items', () => {
        const deleted = splice([1,2,3,4,5], 1, 1)
        expect(deleted).toStrictEqual([2]);
    })

    test('removing with splice with deleteCound should mutate given list', () => {
        const list = [1,2,3,4,5]
        splice(list, 1, 2)
        expect(list).toStrictEqual([1, 4, 5]);
    })

    test('splice should remove rest of the items of no delete cound is given', () => {
        const deleted = splice([1,2,3,4,5], 1)
        expect(deleted).toStrictEqual([2, 3, 4, 5]);
    })
    test('removing with splice without deleteCound should mutate given list', () => {
        const list = [1,2,3,4,5]
        splice(list, 1)
        expect(list).toStrictEqual([1]);
    })

    test('splice should append items from "start"', () => {
        const list = [1,2,3,4,5];
        splice(list, 1, 2, 100, 200, 300);
        expect(list).toStrictEqual([1, 100, 200, 300, 4, 5]);
    })
})