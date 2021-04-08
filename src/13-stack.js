const ListNode = require('../extensions/list-node');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(value) {
    this.value = new ListNode(value).value;
    this.next = new ListNode(value).next;
  }

  push(element) {
    if (!this.value) {
      this.value = element;
    } else if (!this.next) {
      this.next = new ListNode(element);
    } else {
      let list = this.next;
      while (list.next) {
        list = list.next;
      }
      list.next = new ListNode(element);
    }
  }

  pop() {
    if (!this.value) {
      return 1;
    }
    if (!this.next) {
      const element = this.value;
      this.value = null;
      return element;
    }
    let prevList;
    let element = this.next.value;
    let list = this.next;
    while (list.next) {
      prevList = list;
      element = list.next.value;
      list = list.next;
    }
    prevList.next = null;
    return element;
  }

  peek() {
    if (!this.value) {
      return 1;
    }
    if (!this.next) {
      return this.value;
    }
    let element;
    let list = this.next;
    while (list) {
      element = list.value;
      list = list.next;
    }
    return element;
  }
}

module.exports = Stack;
