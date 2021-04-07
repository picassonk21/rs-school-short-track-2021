const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor(value) {
    this.value = new ListNode(value).value;
    this.next = new ListNode(value).next;
  }

  get size() {
    if (!this.value) {
      return 0;
    }
    if (!this.next) {
      return 1;
    }
    let counter = 1;
    let list = this.next;
    while (list) {
      counter += 1;
      list = list.next;
    }
    return counter;
  }

  enqueue(element) {
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

  dequeue() {
    if (!this.value) {
      return 1;
    }
    const element = this.value;
    if (!this.next) {
      this.value = new ListNode().value;
    } else {
      this.value = new ListNode(this.next.value).value;
      this.next = this.next.next;
    }
    return element;
  }
}

module.exports = Queue;
