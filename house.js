'use strict'

class House {
  // address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, short_sale, has_tenants
  constructor(component) {
    this.address = component.address
    this.square_feet = component.square_feet
    this.num_bedrooms = component.num_bedrooms || 3
    this.num_baths = component.num_baths || 2
    this.cost = component.cost || 320000
    this.down_payment = component.down_payment || 0.20
    this.sold = component.sold || false
    this.short_sale = component.short_sale
    this.has_tenants = component.has_tenants || false
  }

  obscure_address() {
    return (this.address.replace(/.{10}$/g, '****'))
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit) {
      this.sold = true
    }
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

let component = {
  address: 'address',
  square_feet: 100,
  num_bedrooms: 2,
  num_baths: 2,
  cost: 12345,
  down_payment: 0.1,
  sold: true,
  short_sale: true,
  has_tenants: true
}

// const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)
const cool = new House(component)

console.log(cool.to_s())
