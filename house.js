'use strict'

let a = {
    address : 'Palembang, Sumatera selatan',
    square_feet : 100,
    num_bedrooms : 4,
    num_baths : 3,
    cost : 1500000,
    down_payment : 10,
    sold : false,
    short_sale : 0,
    has_tenants : true,
  }

class House {

  constructor(a) {
    this.address = a.address
    this.square_feet = a.square_feet
    this.num_bedrooms = a.num_bedrooms || 3
    this.num_baths = a.num_baths || 2
    this.cost = a.cost || 320000
    this.down_payment = a.down_payment  || 0.20
    this.sold = a.sold || false
    this.short_sale = a.short_sale
    this.has_tenants = a.has_tenants || false
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
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

const cool = new House(a)

console.log(cool.to_s())