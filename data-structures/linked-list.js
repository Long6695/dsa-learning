class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode && currentNode.value != value) {
      currentNode = currentNode.next;
    }

    if (!currentNode) {
      return false;
    }
    return true;
  }

  delete(value) {
    if (!this.head) {
      return false;
    }

    let currentNode = this.head;
    if (currentNode.value == value) {
      if (this.head == this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
      }
      return true;
    }

    while (currentNode.next != null && currentNode.next.value != value) {
      currentNode = currentNode.next;
    }

    if (currentNode.next != null) {
      if (currentNode.next == this.tail) {
        this.tail = currentNode;
        this.tail.next = null;
      } else {
        currentNode.next = currentNode.next.next;
      }
      return true;
    }
    return false;
  }

  traverse() {
    let currentNode = this.head;
    const values = [];

    while (currentNode !== null) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    return values;
  }

  reverseTraversal() {
    let currentNode = this.head;
    let values = []
    while(currentNode != null) {
        values.unshift(currentNode.value)
        currentNode = currentNode.next
    }
    return values
  }
}

// const linkedList = new LinkedList();
// console.log(linkedList);
// linkedList.append(10);
// console.log("append 10", linkedList);
// linkedList.append(20);
// console.log("append 20", linkedList);
// linkedList.append(30);
// console.log("append 30", linkedList);
// linkedList.prepend(10)
// console.log('prepend 10', linkedList)
// linkedList.prepend(20)
// console.log('prepend 20', linkedList)
// linkedList.delete(10)
// linkedList.delete(20)
// console.log('result',linkedList)
// console.log(linkedList.traverse());
// console.log(linkedList.reverseTraversal());
