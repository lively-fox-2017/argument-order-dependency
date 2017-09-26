'use strict'

class House {

  constructor(obj) {
    this.address = obj.address
    this.square_feet = obj.square_feet
    this.num_bedrooms = obj.num_bedrooms || 3
    this.num_baths = obj.num_baths || 2
    this.cost = obj.cost || 320000
    this.down_payment = obj.down_payment || 0.20
    this.sold = obj.sold || false
    this.short_sale = obj.short_sale
    this.has_tenants = obj.has_tenants || false
  }

  obscure_address() {
    this.address.replace(/.{10}$/g, '****')
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
    return `${this.address} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}
let obj = {
  address : "Bekasi",
  square_feet : 100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 12345,
  down_payment : 12345,
  sold : true,
  short_sale : 'short_sale',
  has_tenants : true
}

const cool = new House(obj)

console.log(cool.to_s())
