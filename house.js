'use strict'

class House {

  constructor(obj) {
    this.address = obj.address
    this.square_feet = obj.square_feet
    this.num_bedrooms =obj.num_bedrooms || 3
    this.num_baths = obj.num_baths || 2
    this.cost = obj.cost || 320000
    this.down_payment = obj.down_payment || 0.20
    this.sold = obj.sold || false
    this.short_sale = obj.short_sale
    this.has_tenants = obj.has_tenants || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, ' *****')
    
  }

  buy(money, good_credit) {
    if (money >= this.down_payment && good_credit) {
       return this.sold = true
    }
    return false
  }

  down_payment() {
    return cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address() } : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

//const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)
//address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, short_sale, has_tenants
let obj = {
  address: "jalan. iskandar",
  square_feet: 100,
  num_bedrooms: 2,
  num_baths: 2,
  cost: 12345,
  down_payment: 1500,
  sold: true,
  short_sale: 20,
  has_tenants: 20
}
const cool = new House(obj)
console.log(obj.address)

console.log(cool.to_s())
console.log(cool.buy(1600, 30))
//console.log(cool.down_payment())
