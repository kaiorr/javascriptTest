import find from 'lodash/findLastKey'
import remove from 'lodash/remove'

export default class Cart {
  items = []

  add(item) {
    const itemToFind = { product: item.product }

    if(find(this.items, itemToFind)) {
      remove(find(this.items, itemToFind))
    }
    this.items.push(item)
  }

  getTotal() {
    return this.items.reduce((acumulator, item) => {
      return acumulator + item.quantity * item.product.price
    }, 0)
  }
}
