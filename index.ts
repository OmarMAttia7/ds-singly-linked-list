import { ListType, ListNode } from "./listnode"
class SinglyLinkedList {

    head: null | ListNode
    tail: null | ListNode
    length: number;

    constructor() {
        this.head = null
        this.tail = null;
        this.length = 0;
    }

    push(value: ListType): SinglyLinkedList {
        let newNode = new ListNode(value);
        if(!this.head)  this.head = newNode;
        if(this.tail)   this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    pop(): ListType {
        if(!this.head) return;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.isEmpty){
            this.head = null;
            this.tail = null;
        }
        return current.value;
    }

    unshift(value: ListType): SinglyLinkedList {
        let newNode = new ListNode(value);
        if(this.isEmpty){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift(): ListType {
        if(this.isEmpty) return;
        let oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.isEmpty){
            this.tail = null;
        }
        return oldHead.value;
    }

    get(n: number): undefined | ListType {
        if(this.isEmpty || n > this.length - 1 || n < 0) return undefined;
        let targetNode = this.head;
        for(let i = 0; i < n; i++) {
            targetNode = targetNode.next;
        }
        return targetNode.value;
    }

    get isEmpty(): boolean {
        if(this.length === 0) return true;
        return false;
    }
}

function traverseList(list: SinglyLinkedList): number[] {
    let arr: number[] = [];
    let currentNode = list.head;
    while(currentNode){
        arr.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return arr;
}

export {SinglyLinkedList, traverseList};