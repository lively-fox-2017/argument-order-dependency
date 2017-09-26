'use strict'

class House {

  constructor(obj) {
  // constructor(address, square_feet, num_bedrooms, num_baths, cost, down_payment, sold, short_sale, has_tenants) {
    this.address = obj.address;
    this.square_feet = obj.square_feet;
    this.num_bedrooms = obj.num_bedrooms || 3;
    this.num_baths = obj.num_baths || 2;
    this.cost = obj.cost || 320000;
    this.down_payment = obj.down_payment || 0.20;
    this.sold = obj.sold || false;
    this.short_sale = obj.short_sale;
    this.has_tenants = obj.has_tenants || false;

    // this.address = address
    // this.square_feet = square_feet
    // this.num_bedrooms = num_bedrooms || 3
    // this.num_baths = num_baths || 2
    // this.cost = cost || 320000
    // this.down_payment = down_payment || 0.20
    // this.sold = sold || false
    // this.short_sale = short_sale
    // this.has_tenants = has_tenants || false
  }

  obscure_address() {
    return this.address.replace(/.{10}$/g, '****');
  }

  buy(money, good_credit) {
    if (money >= down_payment && good_credit) {
      this.sold = true;
    }
  }

  down_payment() {
    return cost * this.down_payment;
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`;
  }

}

let obj = {
  address: 'address',
  square_feet: 100,
  num_bedrooms: 2,
  num_baths: 2,
  cost: 12345,
  down_payment: 12345,
  sold: true,
  short_sale: true,
  has_tenants: true,

};

// const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)
const cool = new House(obj);

console.log(cool.to_s());
