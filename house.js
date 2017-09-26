'use strict'

class House {

  constructor(argObj) {
    this.address = argObj.address
    this.square_feet = argObj.square_feet
    this.num_bedrooms = argObj.num_bedrooms || 3
    this.num_baths = argObj.num_baths || 2
    this.cost = argObj.cost || 320000
    this.down_payment = argObj.down_payment || 0.20
    this.sold = argObj.sold || false
    this.short_sale = argObj.hasOwnProperty('short_sale') ? argObj.short_sale : null;
    this.has_tenants = argObj.has_tenants || false
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

let houseParam = {
  address: 'address',
  square_feet: 100,
  num_bedrooms: 2,
  num_baths: 2,
  cost: 12345,
  down_payment: 12345,
  sold: true,
  has_tenants: true
}
const cool = new House(houseParam)

console.log(cool.to_s())
