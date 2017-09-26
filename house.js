'use strict'

class House {

  constructor(house) {
    this.address = house.address
    this.square_feet = house.square_feet
    this.num_bedrooms = house.num_bedrooms
    this.num_baths = house.num_baths
    this.cost = house.cost
    this.down_payment = house.down_payment
    this.sold = house.sold
    // this.short_sale = short_sale
    this.has_tenants = house.has_tenants
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





let house = {
    address : 'address',
    square_feet : 100,
    num_bedrooms : 10,
    num_baths : 10,
    cost : 10000000,
    down_payment : 0.100,
    sold : false,
    has_tenants : false

}

const cool = new House(house)
// const cool1 = new House('address', 100, 2, 2, 12345, 12345, true, true)

console.log(cool.hasOwnProperty('square_feet'))
console.log(cool.to_s())