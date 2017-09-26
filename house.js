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
    return this.address;
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

var obj = {
  address : 'address',
  square_feet: 100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 12345,
  down_payment :12345,
  sold: true,
  has_tenants : true,
  short_sale: "",
}
// const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)
const cool = new House(obj);

console.log(cool.to_s())
