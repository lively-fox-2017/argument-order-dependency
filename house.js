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
    return this.address.replace(/.{10}$/g, '****')
  }

  buy(money, good_credit) {
    if (money >= this.down_payment && good_credit) {
      this.sold = true
    }
    return this.sold
  }

  dp() { //down_payment
    return this.cost * this.down_payment
  }

  to_s() {
    return `${this.obscure_address()} : ${this.square_feet} sq. ft., ${this.num_bedrooms} bed, ${this.num_baths} bath. ${this.cost}`
  }
}

var obj = {
  address : 'address',
  square_feet : 100,
  num_bedrooms : 2,
  num_baths : 2,
  cost : 12345,
  down_payment : 12345,
  sold : true,
  short_sale : true,
  has_tenants : 'has_tenants' || false, // bagaimana cara mengisi nilai default?
}

var args = obj;
const cool = new House(args); // instansiasi
// const cool = new House('address', 100, 2, 2, 12345, 12345, true, true)
// console.log(cool.address);
// console.log(cool.square_feet);
// console.log(cool.num_bedrooms);
// console.log(cool.num_baths);
// console.log(cool.cost);
// console.log(cool.down_payment);
// console.log(cool.sold);
// console.log(cool.short_sale);
// console.log(cool.has_tenants);

console.log(cool.obscure_address());
console.log(cool.buy(100, 100));
console.log(cool.dp());
console.log(cool.to_s())
