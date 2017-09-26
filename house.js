'use strict'

let objHouse = {
	address : "address", 
	square_feet : 100, 
	num_bedrooms : 2, 
	num_baths : 2, 
	cost : 12345, 
	down_payment : 12345, 
	sold : true, 
	short_sale : 3, 
	has_tenants : true,
}

class House {
  constructor(objHouse) {
    this.address = objHouse.address
    this.square_feet = objHouse.square_feet
    this.num_bedrooms = objHouse.num_bedrooms || 3
    this.num_baths = objHouse.num_baths || 2
    this.cost = objHouse.cost || 320000
    this.down_payment = objHouse.down_payment || 0.20
    this.sold = objHouse.sold || false
    this.short_sale = objHouse.short_sale
    this.has_tenants = objHouse.has_tenants || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****');
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

const cool = new House(objHouse);

console.log(cool.to_s());
