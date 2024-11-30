// JavaScript program to clone a linked 
// list with random pointers

// Linked List Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = this.random = null;
    }
}

class LinkedList {
    // Linked list constructor
    constructor(head) {
        this.head = head;
    }

    // Push method to put data always 
    // at the head in the linked list.
    push(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
    }

    // Method to print the list.
    print() {
        let temp = this.head;
        while (temp != null) {
            let random = temp.random;
            let randomData = ((random != null) ?
                random.data : -1);
            console.log("Data = " + temp.data +
                ", Random data = " + randomData);
            temp = temp.next;
        }
    }

    // Actual clone method which returns head
    // reference of cloned linked list.
    clone() {
        // Initialize two references, one with 
        // original list's head.
        let origCurr = this.head,
            cloneCurr = null;

        // Hash map which contains node to node
        // mapping of original and clone linked list.
        let map = new Map();

        // Traverse the original list and make a 
        // copy of that in the clone linked list.
        while (origCurr != null) {
            cloneCurr = new Node(origCurr.data);
            map.set(origCurr, cloneCurr);
            origCurr = origCurr.next;
        }

        // Adjusting the original list reference  
        // again.
        origCurr = this.head;

        // Traversal of original list again to 
        // adjust the next and random references 
        // of clone list using hash map.
        while (origCurr != null) {
            cloneCurr = map.get(origCurr);
            cloneCurr.next = map.get(origCurr.next);
            cloneCurr.random = map.get(origCurr.random);
            origCurr = origCurr.next;
        }

        // Return the head reference of the 
        // clone list.
        return new LinkedList(map.get(this.head));
    }
}

// Driver code
// Pushing data in the linked list.
let list =
    new LinkedList(new Node(5));
list.push(4);
list.push(3);
list.push(2);
list.push(1);

// Setting up random references.
list.head.random =
    list.head.next.next;
list.head.next.random =
    list.head.next.next.next;
list.head.next.next.random =
    list.head.next.next.next.next;
list.head.next.next.next.random =
    list.head.next.next.next.next.next;
list.head.next.next.next.next.random =
    list.head.next;

// Making a clone of the original 
// linked list.
let clone = list.clone();

// Print the original and cloned 
// linked list.
console.log("Original linked list");
list.print();
console.log("Cloned linked list");
clone.print();
