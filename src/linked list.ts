// var testLink: LinkedList = {
//   value: 1,
//   next: {
//     value: 2,
//     next: null,
//   },
// }

type LinkedList = {
  next: LinkedList | null
  value: any
}

type DuLinkedList = {
  next: DuLinkedList | null,
  prev: DuLinkedList | null,
  value: any
}

export class List {
  header: boolean
  next: LinkedList | null
  value: any
  constructor(data: any) {
    this.header = true
    this.next = null
    this.value = data
  }

  add(data: any) {
    let lastNext: LinkedList = this
    while (lastNext.next) {
      lastNext = lastNext.next
    }

    lastNext.next = new NodeList(data)
  }
}

class NodeList {
  next: LinkedList | null
  value: any
  constructor(data: any) {
    this.next = null
    this.value = data
  }
}


export class DuLink {
  header: boolean
  next: DuLinkedList | null
  value: any
  prev: null
  constructor(data: any) {
    this.header = true
    this.next = null
    this.prev = null
    this.value = data
  }

  add(data: any) {
    let lastNext: DuLinkedList = this
    while (lastNext.next) {
      lastNext = lastNext.next
    }

    lastNext.next = new DuNodeList(data)
    lastNext.next.prev = lastNext
  }
}


class DuNodeList {
  next: DuLinkedList | null
  value: any
  prev: null
  constructor(data: any) {
    this.next = null
    this.prev = null
    this.value = data
  }
}