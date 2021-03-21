/*
* This file contains list of self made array functions
* See array method documentation at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
* These implementation differs from arrays native implementation, in a way that they require array to be passed to them as first argument (see forEach example below)
* */

type ForEachFunction<T> = (data: T, index: number, arr: T[]) => void;
export function forEach<T>(arr: T[], callback: ForEachFunction<T>) {
    for(let i = 0; i<arr.length; i++) {
        const item = arr[i];
        callback(item, i, arr);
    }
}

type SomeFunction<T> = (data: T, index: number, arr: T[]) => boolean;
export function some<T>(arr: T[], callback: SomeFunction<T>): boolean {
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
    for(let i = 0; i<arr.length; i++) {
        const item = arr[i];
        if(!callback(item, i, arr)) {
            return false;
        }
    }
    return true;
}

type FindFunction<T> = (data: T, index: number, arr: T[]) => boolean;
export function find<T>(arr: T[], callback: FindFunction<T>): T | undefined {
    for(let i = 0; i<arr.length; i++) {
        const item = arr[i];
        if(callback(item, i, arr)) {
            return item;
        }
    }
    return undefined;
    // TODO return first 'item' using forloop that returns true when invoked with 'callback'
    return undefined;
}

type FindIndexFunction<T> = (data: T, index: number, arr: T[]) => boolean;
export function findIndex<T>(arr: T[], callback: FindIndexFunction<T>): number {
    for(let i = 0; i<arr.length; i++) {
        const item = arr[i];
        if(callback(item, i, arr)) {
            return i;
        }
    }
    return -1;
}


type FilterFunction<T> = (data: T, index: number, arr: T[]) => boolean;
export function filter<T>(arr: T[], callback: FilterFunction<T>): T[] {
    const acc: T[] = [];
    for(let i = 0; i<arr.length; i++) {
        const item = arr[i];
        if(callback(item, i, arr)) {
            acc.push(item)
        }
    }
    return acc;
}

type MapFunction<T, R> = (data: T, index: number, arr: T[]) => R;
export function map<T, R>(arr: T[], callback: MapFunction<T, R>): R[] {
    const acc: R[] = [];
    for(let i = 0; i<arr.length; i++) {
        const item = callback(arr[i], i, arr);
        acc.push(item);
    }
    return acc;
}

type FlatMapFunction<T, R> = (data: T, index: number, arr: T[]) => R[] | R;
export function flatMap<T, R>(arr: T[], callback: FlatMapFunction<T, R>): R[] {
    const acc: R[] = [];
    for(let i = 0; i<arr.length; i++) {
        const item = callback(arr[i], i, arr);
        if (Array.isArray(item)) {
            acc.push(...item)
        } else {
            acc.push(item);
        }
    }
    return acc;
}

export function reverse<T>(arr: T[]): T[] {
    const copy: T[] = [...arr];
    for(let i = 0; i<arr.length; i++) {
        arr[arr.length - 1 - i] = copy[i];
    }
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
    if (start < 0) {
        start = arr.length + start;
    }
    start = Math.max(start, 0);
    if (end < 0) {
        end = arr.length + end;
    }
    end = Math.max(end, start);
    for(let i = start; i<end; i++) {
        acc.push(arr[i]);
    }
    return acc;
}

// Probably not the most elegant solution
export function splice<T>(arr: T[], start= 0, deleteCount = arr.length - start, ...items: T[]): T[] {
    if (start < 0) {
        start = arr.length + start;
    }
    start = Math.max(start, 0);
    // remove items 'start'
    const head: T[] = [];
    for(let i = 0; i < start; i++) {
        head.push(arr.shift());
    }
    deleteCount = Math.max(0, deleteCount);
    // remove 'deleteCount' number of items and store them
    const deleted: T[] = [];
    for(let i = 0; i < deleteCount; i++) {
        deleted.push(arr.shift());
    }
    arr.unshift(...items);
    arr.unshift(...head);
    return deleted;
}