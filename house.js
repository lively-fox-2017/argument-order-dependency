'use strict'

class House {

  constructor(dataRumah) {
    this.address = dataRumah.address
    this.square_feet = dataRumah.square_feet
    this.num_bedrooms = dataRumah.num_bedrooms ||2
    this.num_baths = dataRumah.num_baths || 2
    this.cost = dataRumah.cost || 320000
    this.down_payment = dataRumah.down_payment || 0.02
    this.sold = dataRumah.sold
    this.short_sale = dataRumah.short_sale
    this.has_tenants = dataRumah.has_tenants || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****')
    // console.log(this.address);
  }

  buy(money, good_credit) {
    if (money >= this.down_payment && good_credit) {
     return this.sold = true
    }
  }

  down_payments() {
    return this.cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}
let dataRumah ={
  address:'Jakarta Selatan',
  square_feet:100,
  num_bedrooms:3, 
  num_baths:2, 
  cost:12345, 
  down_payment:0.02, 
  sold:false, 
  short_sale:false, 
  has_tenants:true
}

// const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)
const cool = new House(dataRumah)
console.log(cool.buy(330000,20000));
console.log(cool.sold);
console.log(cool.down_payments());
console.log(cool.to_s())
