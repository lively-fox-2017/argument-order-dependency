'use strict'

class House {

  constructor(param) {
    this.address = param['address']
    this.square_feet = param['square_feet']
    this.num_bedrooms = param['num_bedrooms'] || 3
    this.num_baths = param['num_baths'] || 2
    this.cost = param['cost'] || 320000
    this.down_payment = param['down_payment'] || 0.20
    this.sold = param['sold'] || false
    this.short_sale = param['short_sale']
    this.has_tenants = param['has_tenants'] || false
  }

  obscure_address() {
    let newaddress = this.address.replace(/.{10}$/g, '****')
    return newaddress
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit) {
      this.sold = true
    }
    return this
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

let obj = {
  address: 'address',
  square_feet: 100,
  num_bedrooms: 2,
  num_baths: 2,
  cost: 12345,
  down_payment: 12345,
  sold: true,
  short_sale: true,
  has_tenants: true
}

const cool = new House(obj)

console.log(cool.to_s())
