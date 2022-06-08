type ListType = number;
class ListNode {
    next: null | ListNode;
    value: ListType;
    constructor(value: ListType) {
        this.next = null;
        this.value = value;
    }
}

export {ListType, ListNode};