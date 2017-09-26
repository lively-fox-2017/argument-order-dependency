'use strict'

class House {

  constructor(param) {
    this.address = param['address']//['address']== argument
    this.square_feet = param['square_feet']
    this.num_bedrooms = param['num_bedrooms'] || 3
    this.num_baths = param ['num_baths'] || 2
    this.cost = param ['cost'] || 320000
    this.down_payment =param ['down_payment'] || 0.20
    this.sold =param ['sold'] || false
    this.short_sale =param ['short_sale']
    this.has_tenants =param ['has_tenants'] || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')//buat sensor kalimat
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

let obj={
  address: 'Jl Sarwo Edi Wibowo No.68',
  square_feet:100,
  num_bedrooms:2,
  num_baths:5,
  cost:12345,
  down_payment:12345,
  sold:true,
  short_sale:'short_sale',
  has_tenants:true
}
// const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)
let cool=new House(obj)
console.log(cool.to_s())
