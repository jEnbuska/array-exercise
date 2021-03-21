/*
* This file contains list of self made array functions
* See array method documentation at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
* These implementation differs from arrays native implementation, in a way that they require array to be passed to them as first argument (see forEach example below)
* */

type ForEachFunction<T> = (data: T, index: number, arr: T[]) => void;
export function forEach<T>(arr: T[], callback: ForEachFunction<T>) {
    // TODO invoke 'callback' with every item in 'arr', using forloop
    // Prefilled example nothing todo here
    for(let i = 0; i<arr.length; i++) {
        const item = arr[i];
        callback(item, i, arr);
    }
}

type SomeFunction<T> = (data: T, index: number, arr: T[]) => boolean;
export function some<T>(arr: T[], callback: SomeFunction<T>): boolean {
    // TODO return true if some item in 'arr' return true using 'callback', otherwise return false
    // Prefilled example nothing todo here
    for(let i = 0; i<arr.length; i++) {
        const item = arr[i];
        if(callback(item, i, arr)) {
            return true;
        }
    }
    return false;
}

type EveryFunction<T> = (data: T, index: number, arr: T[]) => boolean;
export function every<T>(arr: T[], callback: EveryFunction<T>): boolean {
    // TODO return true if every item in 'arr' return true using 'callback', otherwise return false
    return false;
}

type FindFunction<T> = (data: T, index: number, arr: T[]) => boolean;
export function find<T>(arr: T[], callback: FindFunction<T>): T | undefined {
    let item: T | undefined = undefined;
    // TODO return first 'item' using forloop that returns true when invoked with 'callback'
    return item;
}

type FindIndexFunction<T> = (data: T, index: number, arr: T[]) => boolean;
export function findIndex<T>(arr: T[], callback: FindIndexFunction<T>): number {
    let index = -1;
    // TODO return index of first item in 'arr' using 'callback', if no item is found return -1
    return index;
}


type FilterFunction<T> = (data: T, index: number, arr: T[]) => boolean;
export function filter<T>(arr: T[], callback: FilterFunction<T>): T[] {
    const acc: T[] = [];
    // TODO add items to list using forloop that return true
    return acc;
}

type MapFunction<T, R> = (data: T, index: number, arr: T[]) => R;
export function map<T, R>(arr: T[], callback: MapFunction<T, R>): R[] {
    const acc: R[] = [];
    // TODO transform items and add the to list using 'callback' using forloop
    return acc;
}

type FlatMapFunction<T, R> = (data: T, index: number, arr: T[]) => R[] | R;
export function flatMap<T, R>(arr: T[], callback: FlatMapFunction<T, R>): R[] {
    const acc: R[] = [];
    // TODO by using forloop, return Array of 'R'.
    //  - If callback return a array (use Array.isArray function), append them all to acc
    //  - If callback a non array, append this single item to list.
    return acc;
}

export function reverse<T>(arr: T[]): T[] {
    const copy: T[] = [...arr];
    // TODO return 'arr' in reverse order (this operation should be mutable)
    return arr;
}



type ReduceFunction<T, R> = (acc: R, data: T, index: number, arr: T[]) => R;
export function reduce<T, R>(arr: T[], callback: ReduceFunction<T, R>, initialValue: R): R {
    let acc: R = initialValue;
    for(let i = 0; i<arr.length; i++) {
        acc = callback(acc, arr[i], i, arr);
    }
    return acc;
}

export function slice<T>(arr: T[], start= 0, end = arr.length): T[] {
    const acc: T[] = [];
    /* TODO
        - return a new array using forloop, that consists of items between start and end
        - negative integers for start and end should be interpreted as (n)th from the tail of the list
        (for example (-1) means last and (-2) means second last, etc.)
        - if start item is before end item return empty list */
    return acc;
}

export function splice<T>(arr: T[], start= 0, deleteCount = arr.length - start, ...items: T[]): T[] {
    const deleted: T[] = []
    /* TODO (use forloop)
        - Starting from 'start' index, remove 'deleteCount' number of items from 'arr' (this operation should be mutable)
        - Move all items up in 'arr' by 'items.length', starting from 'start' index (this operation should be mutable)
        - Add all 'items' to 'arr' starting from 'start' index (this operation should be mutable)
        - return deleted item
    */
    return deleted;
}