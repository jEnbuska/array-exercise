import {splice} from "../src/array-functions";

describe('splice', () => {
    test('splice should return removed items', () => {
        const list = [1,2,3,4,5];
        const copy = [...list]
        const deleted = splice(list, 1, 1)
        expect(deleted).toStrictEqual(copy.splice(1, 1));
    })

    test('calling splice with negative start should return removed items from end', () => {
        const list = [1,2,3,4,5]
        const copy = [...list]
        const deleted = splice(list, -4, 1)
        expect(deleted).toStrictEqual(copy.splice(-4, 1));
    })

    test('calling splice with negative start should remove items from end', () => {
        const list = [1,2,3,4,5]
        const copy = [...list]
        splice(list, -4, 1)
        copy.splice(-4, 1)
        expect(list).toStrictEqual(copy);
    })

    test('removing with splice with deleteCount should mutate given list', () => {
        const list = [1,2,3,4,5]
        const copy = [...list]
        splice(list, 1, 2);
        copy.splice(1,2);
        expect(list).toStrictEqual(copy);
    })

    test('splice should remove rest of the items of no delete cound is given', () => {
        const list = [1,2,3,4,5]
        const copy = [...list]
        const deleted = splice(list, 1)
        expect(deleted).toStrictEqual(copy.splice(1));
    })
    test('removing with splice without deleteCount should mutate given list', () => {
        const list = [1,2,3,4,5]
        const copy = [...list]
        splice(list, 1)
        copy.splice(1);
        expect(list).toStrictEqual(copy);
    })

    test('splice should append items from "start"', () => {
        const list = [1,2,3,4,5];
        const copy = [...list]
        splice(list, 1, 2, 100, 200, 300);
        copy.splice( 1, 2, 100, 200, 300);
        expect(list).toStrictEqual(copy);
    })
})