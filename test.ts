import { SinglyLinkedList, traverseList} from ".";



let list = new SinglyLinkedList();

test('add 1 element', () => {
    list.push(5);
    expect(traverseList(list)).toEqual([5])
});

test('add multiple elements', () => {
    list.push(1);
    list.push(3);
    list.push(8);
    expect(traverseList(list)).toEqual([5, 1, 3, 8])
})

test('delete 1 element from front', () => {
    list.pop();
    list.pop();
    list.pop();
    list.pop();
    expect(traverseList(list)).toEqual([])
})

test('deletes elements from the back', () => {
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    
    expect(list.shift()).toBe(1);
    expect(traverseList(list)).toEqual([2, 3, 4]);

    expect(list.shift()).toBe(2);
    expect(traverseList(list)).toEqual([3, 4]);
})

test('delete elements from the front again', () => {
    list.pop();
    expect(traverseList(list)).toEqual([3]);

    list.pop();
    expect(traverseList(list)).toEqual([]);
});

test('access elements', () => {

    list.push(5);
    list.push(3);
    list.push(9);
    list.push(4);
    //5, 3, 9, 4
    expect(list.get(-1)).toBe(undefined);
    expect(list.get(5)).toBe(undefined);
    expect(list.get(0)).toBe(5);
    expect(list.get(2)).toBe(9);
    expect(list.get(3)).toBe(4);
})