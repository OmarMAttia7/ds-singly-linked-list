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

    pop(): void | ListType {
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
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current.value;
    }

    unshift(value: ListType): SinglyLinkedList {
        let newNode = new ListNode(value);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift(): void | ListType {
        if(this.head === null) return;
        let oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.head === null){
            this.tail = null;
        }
        return oldHead.value;
    }

    get(n: number): undefined | ListNode {
        if(this.head === null || n > this.length - 1 || n < 0) return undefined;
        let targetNode = this.head;
        for(let i = 0; i < n; i++) {
            if(!targetNode.next) break;
            targetNode = targetNode.next;
        }
        return targetNode;
    }

    set(value: ListType, n: number): boolean {
        let targetNode = this.get(n);
        if(!targetNode) return false;
        targetNode.value = value;
        return true;
    }

    insert(value: ListType, n: number): boolean {
        if(n > this.length || n < 0) return false;
        else if(n === this.length) this.push(value);
        else if(n === 0) this.unshift(value);
        else {
            let preNode = this.get(n - 1);
            if(!preNode) return false;
            let nextNode = preNode.next;

            let targetNode = new ListNode(value);

            preNode.next = targetNode;
            targetNode.next = nextNode;
            this.length++;
        }
        
        return true;
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