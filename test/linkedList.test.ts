import { List, DuLink } from "../src/linked list";


describe('Linked list', () => {
  it('结构是否正确', () => {
    const listInstance = new List()

    listInstance.add('test')
    // expect(listInstance.value).toBe('test')
    expect(listInstance.header!.next).toBe(null)
    expect(listInstance.header!.value).toBe('test')
    expect(listInstance.length).toBe(1)
    
    listInstance.add('value2')
    
    expect(listInstance.header!.next!.value).toBe('value2')
    expect(listInstance.header!.next!.next).toBe(null)
    expect(listInstance.length).toBe(2)
    // @ts-ignore
    expect(listInstance.header.next.header).toBe(undefined)

    listInstance.print()
    
  })
})


describe.skip('Du Linked list', () => {
  it('结构是否正确', () => {
    const listInstance = new DuLink('test')

    expect(listInstance.value).toBe('test')
    expect(listInstance.next).toBe(null)
    expect(listInstance.prev).toBe(null)
    expect(listInstance.header).toBe(true)
    
    listInstance.add('value2')
    
    expect(listInstance.next!.value).toBe('value2')
    expect(listInstance.next!.next).toBe(null)
    expect(listInstance.next!.prev).toBe(listInstance)
    // @ts-ignore
    expect(listInstance.next.header).toBe(undefined)

    listInstance.add('value3')
    
    const value3 = listInstance.next!.next!

    expect(value3.value).toBe('value3')
    expect(value3.next).toBe(null)
    expect(value3.prev).toBe(listInstance.next)
    // @ts-ignore
    expect(value3.header).toBe(undefined)
    
  })
})