// var testLink: LinkedList = {
//   value: 1,
//   next: {
//     value: 2,
//     next: null,
//   },
// }



type DuLinkedList = {
  next: DuLinkedList | null,
  prev: DuLinkedList | null,
  value: any
}

export class List {
  header: NodeList<unknown> | null
  length: number
  constructor() {
    this.header = null
    this.length = 0
  }

  add<T>(data: T) {
    const node = new NodeList(data)
    let lastNext = this.header
    if (lastNext) {
      while (lastNext.next) {
        lastNext = lastNext.next
      }
      lastNext.next = node
    } else {
      this.header = node
    }
    this.length++
  }

  print() {
    let printStr = ''
    let lastNext = this.header
    if (lastNext) {
      printStr += lastNext.value
      while (lastNext.next) {
        lastNext = lastNext.next
        printStr +=  '=>' + lastNext.value 
      }
    } else {
      console.warn(`no data`)
    }

    console.log(printStr)
  }
}

class NodeList<T> {
  next: NodeList<unknown> | null
  value: T
  constructor(data: T) {
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