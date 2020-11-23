export default class Cart {
  items = []

  add(item) {
    this.items.push(item)
  }

  getTotal() {
    return this.items.reduce((acumulator, item) => {
      return acumulator + item.quantity * item.product.price
    }, 0)
  }
}
