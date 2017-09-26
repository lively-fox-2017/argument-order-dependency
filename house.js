// 'use strict'

class House {
  // address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, short_sale, has_tenants
  constructor(argumentss) {
    this.address = argumentss['address']
    this.square_feet = argumentss['square_feet']
    this.num_bedrooms = argumentss['num_bedrooms'] || 3
    this.num_baths = argumentss['num_baths'] || 2
    this.cost = argumentss['cost'] || 320000
    this.down_payment = argumentss['down_payment'] || 0.20
    this.sold = argumentss['sold'] || false
    this.short_sale = argumentss['short_sale']
    this.has_tenants = argumentss['has_tenants'] || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
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
// address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, short_sale, has_tenants
// 'address', 100, 2, 2, 12345, 12345, true, true
let argumentss = {
  address : 'address',
  square_feet : 100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 12345,
  down_payment : 12345,
  sold : true,
  short_sale : 'short_sale',
  has_tenants : true
}

const cool = new House(argumentss)

console.log(cool.to_s())
