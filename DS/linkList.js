
function createNode(value) {
    return {
        value: value,
        next: null,
    }
}

class linkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insert(value) {
        const newNode = createNode(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    print() {
        let current = this.head;
        while (current) {
            // console.log(current.value);
            current = current.next;
        }
    }
}

// var addTwoNumbers = function () {};

const linklist = new linkList();
linklist.insert(5)
linklist.insert(51)
linklist.insert(512)
linklist.insert(53)
linklist.insert(4)
linklist.print()

// let list = createNode("helloworld")
// console.log("node", list)