const Node = require('./node');

class LinkedList {
    
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        const newNode = new Node(data);

        if (this._head == null) {
            this._head = newNode;
        } else { 
            this._tail.next = newNode;
            newNode.prev = this._tail;
        }
        this._tail = newNode;
        this.length += 1;
        return this;
    }

    head() { 
        return this._head.data;
    }

    tail() {
        return this._tail.data;
     }

    at(index) { 
        let currentNode = this._head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        if (this.length) {

            let currentNode = this._head
            for (let i = 0; i < index; i++) currentNode = currentNode.next;

            const newNode = new Node(data);
            currentNode.prev.next = newNode;
            newNode.prev = currentNode.prev;
            currentNode.prev = newNode;
            newNode.next = currentNode;
            this.length += 1;
            return this

        } else {
            this.append(data)
            return this
        }
     }

    isEmpty() { 
        return this.length === 0;
    }

    clear() { 
        let currentNode = this._head;
        while (currentNode) {
            currentNode.data = null;
            currentNode = currentNode.next;
        }
        this.length = 0;
        return this;
    }

    deleteAt(index) { 
        let currentNode = this._head;

        if (index === 0) {
            this._head = currentNode;
        } else if (index === (this.length - 1)) {
            this._tail = this._tail.prev;
            this._tail.next = null;
        } else {
            for (let i = 0; i < index; i++){
                currentNode = currentNode.next;
            }
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
        }

        this.length -= 1;
        return this;
    }

    reverse() { 
        let currentNode = this._head;
        while (currentNode) {
            let nextNode = currentNode.next;
            currentNode.next = currentNode.prev;
            currentNode = nextNode;
        }

        let temp = this._head;
        this._head = this._tail;
        this._tail = temp;

        return this;
    }

    indexOf(data) { 
        let currentNode = this._head;

        for (let i = 0; currentNode; i++) {
            if (currentNode.data === data) return i;
            currentNode = currentNode.next;
        }

        return -1;
    }
}

module.exports = LinkedList;
