'use strict'

class House {

  constructor(argumenObj) {
    this.address = argumenObj.address
    this.square_feet = argumenObj.square_feet
    this.num_bedrooms = argumenObj.num_bedrooms || 3
    this.num_baths = argumenObj.num_baths || 2
    this.cost = argumenObj.cost || 320000
    this.down_payment = argumenObj.down_payment || 0.20
    this.sold = argumenObj.sold || false
    this.short_sale = argumenObj.short_sale
    this.has_tenants = argumenObj.has_tenants || false
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

var argObj = {
  address: 'address',
  square_feet: 100,
  num_bedrooms: 2,
  num_baths: 2,
  cost: 12345,
  down_payment: 12345,
  sold: true,
  has_tenants: false,
  short_sale: false
}

const cool = new House(argObj)
console.log(cool.to_s())
