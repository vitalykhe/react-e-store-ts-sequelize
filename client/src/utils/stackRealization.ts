export class LinkedList<T> {
  items: Iterable<T>

  constructor(items: Iterable<T>) {
    this.items = items
  }

  pop() {
    return "pop"
  }
  push() {
    return "push"
  }
  shift() {
    console.log("shift")
  }
  next() {
    console.log("next")
  }
  prev() {
    console.log("prev")
  }

  getItems() {
    return this.items
  }
}

export class Stack<T> {
  private items: Iterable<T>

  constructor(private linkedList: LinkedList<T>) {
    this.items = this.linkedList.getItems()
    this.linkedList = linkedList
  }

  pop = this.linkedList.pop
  push = this.linkedList.push
}
