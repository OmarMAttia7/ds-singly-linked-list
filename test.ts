import { SinglyLinkedList, traverseList} from ".";



let list = new SinglyLinkedList();

test('add 1 item', () => {
    list.push(5);
    expect(traverseList(list)).toEqual([5])
});

test('add multiple items', () => {
    list.push(1);
    list.push(3);
    list.push(8);
    expect(traverseList(list)).toEqual([5, 1, 3, 8])
})

test('delete 1 item from front', () => {
    list.pop();
    list.pop();
    list.pop();
    list.pop();
    expect(traverseList(list)).toEqual([])
})

test('deletes items from the back', () => {
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    
    expect(list.shift()).toBe(1);
    expect(traverseList(list)).toEqual([2, 3, 4]);

    expect(list.shift()).toBe(2);
    expect(traverseList(list)).toEqual([3, 4]);
})

test('delete items from the front again', () => {
    list.pop();
    expect(traverseList(list)).toEqual([3]);

    list.pop();
    expect(traverseList(list)).toEqual([]);
});

test('get item values', () => {

    list.push(5);
    list.push(3);
    list.push(9);
    list.push(4);
    //5, 3, 9, 4
    expect(list.get(-1)).toBe(undefined);
    expect(list.get(5)).toBe(undefined);
    expect(list.get(0)?.value).toBe(5);
    expect(list.get(2)?.value).toBe(9);
    expect(list.get(3)?.value).toBe(4);
})

test('set item values', () => {

    expect(list.set(87, 1)).toBe(true);

    expect(list.get(1)?.value).toBe(87)

    expect(traverseList(list)).toEqual([5, 87, 9, 4]);

});

test('insert items at specefied indexes', () => {
    expect(list.insert(5, -1)).toBe(false);
    expect(list.insert(5, list.length + 1)).toBe(false);
    //[5, 87, 9, 4]
    expect(list.insert(90, 2)).toBe(true);
    expect(traverseList(list)).toEqual([5, 87, 90, 9, 4]);
    expect(list.insert(14, list.length)).toBe(true);
    expect(traverseList(list)).toEqual([5, 87, 90, 9, 4, 14]);
});

test('remove items', () => {
    //[5, 87, 90, 9, 4, 14]
    expect(list.remove(1)).toEqual(87);
    expect(traverseList(list)).toEqual([5, 90, 9, 4, 14]);
    
    expect(list.remove(5)).toBeUndefined();
    expect(list.remove(-1)).toBeUndefined();

    expect(list.remove(list.length - 1)).toEqual(14);
    expect(traverseList(list)).toEqual([5, 90, 9, 4]);
});