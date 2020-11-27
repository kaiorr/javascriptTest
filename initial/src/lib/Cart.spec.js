import Cart from './Cart'

describe('Cart', () => {
  let cart;
  let product = {
    title: 'Nike Shox shoes - men',
    price: 3588
  }

  let product2 = {
    title: 'Adidas running shoes - women',
    price: 4122
  }

  beforeEach(() => {
    cart = new Cart()
  })

  describe('getTotal()', () => {

  it('should return 0 when getTotal() is executed in a newly created ', () => {
    expect(cart.getTotal().getAmount()).toEqual(0)
  });

  it('should  multiply quantity and price and receive the total amount', () => {
    const item = {
      product: {
        title: 'Adidas running shoes - men',
        price: 3588
      },
      quantity: 2
    }
    cart.add(item)

    expect(cart.getTotal().getAmount()).toEqual(7176)
  });

  it('should ensure no more than on product exists at a time ', () => {
    cart.add({
      product,
      quantity: 2
    });

    cart.add({
      product,
      quantity: 1,
    })

    expect(cart.getTotal().getAmount()).toEqual(10764)
  });

  it('should update total when a product gets included and then remove', () => {
    cart.add({
      product,
      quantity: 2,
    })

    cart.add({
      product: product2,
      quantity: 1
    })

    cart.remove(product)

    expect(cart.getTotal().getAmount()).toEqual(4122)
  });

  })

  describe('checkout()', () => {
    it('should return an object with the total and the list of items', () => {
      cart.add({
        product,
        quantity: 2
      })

      cart.add({
        product: product2,
        quantity: 3
      })

      expect(cart.summary()).toMatchSnapshot()
      expect(cart.getTotal().getAmount()).toBeGreaterThan(0)
    });

    it('should reset the cart when checkout() is called', () => {
      cart.add({
        product: product2,
        quantity: 3
      })

      cart.checkout()

      expect(cart.getTotal().getAmount()).toEqual(0)
    });

  });

  describe('Especial Condition', () => {
    it('should aplly percentage discount quantity above minimum is passed', () => {
      const condition = {
        percentage: 30,
        minimum: 2
      }

      cart.add({
        product,
        condition,
        quantity: 5
      })

      expect(cart.getTotal().getAmount()).toEqual(12558)
    });

    it('should make calc the discount as quantity ', () => {
      const condition = {
        quantity: 2
      }

      cart.add({
        product,
        condition,
        quantity: 4
      })

      expect(cart.getTotal().getAmount()).toEqual(7176)
    });

  });

})
