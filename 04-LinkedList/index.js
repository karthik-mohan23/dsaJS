//Create node
class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

// Create Linked list
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
}
