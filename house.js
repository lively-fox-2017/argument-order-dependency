'use strict'

class House {

  constructor(namedArguments) { 
    this.address = namedArguments_obj.address
    this.square_feet = namedArguments_obj.square_feet
    this.num_bedrooms = namedArguments_obj.num_bedrooms || 3
    this.num_baths = namedArguments_obj.num_baths || 2
    this.cost = namedArguments_obj.cost || 320000
    this.down_payment = namedArguments_obj.down_payment || 0.20
    this.sold = namedArguments_obj.sold || false
    this.short_sale = namedArguments_obj.short_sale
    this.has_tenants = namedArguments_obj.has_tenants || false
  }

  obscure_address() {
    this.address.replace(/.{10}$/g, '****')
    return this.address
  }

  buy(money, good_credit) {
    if (money >= this.down_payment && good_credit) {
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

let namedArguments_obj = {
  address : 'address',
  square_feet : 100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 12345,
  down_payment :12345,
  sold : true,
  short_sale : true,
  has_tenants : true,
}

const cool = new House(namedArguments_obj) // <== param sbg nama obj


console.log(cool.to_s())
