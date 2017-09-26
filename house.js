'use strict'

class House {

  // constructor(address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, short_sale, has_tenants) {
  //   this.address = address
  //   this.square_feet = square_feet
  //   this.num_bedrooms = num_bedrooms || 3
  //   this.num_baths = num_baths || 2
  //   this.cost = cost || 320000
  //   this.down_payment = down_payment || 0.20
  //   this.sold = sold || false
  //   this.short_sale = short_sale
  //   this.has_tenants = has_tenants || false
  // }

  constructor(inputParams) {
    this.address = inputParams.address
    this.square_feet = inputParams.square_feet
    this.num_bedrooms = inputParams.num_bedrooms || 3
    this.num_baths = inputParams.num_baths || 2
    this.cost = inputParams.cost || 320000
    this.down_payment = inputParams.down_payment || 0.20
    this.sold = inputParams.sold || false
    this.short_sale = inputParams.short_sale
    this.has_tenants = inputParams.has_tenants || false
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

let inputParams = {
  address:'address',
  square_feet:100,
  num_bedrooms:2,
  num_baths:2,
  cost:12345,
  down_payment:12345,
  sold:true,
  short_sale:true
}
const cool = new House(inputParams)

console.log(cool.to_s())
