const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('Web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

let accounts;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
    });

describe('Inbox', () => {
  it('deploys a contracts', ()=> {
    console.log(accounts);
  });

});



// class Car {
//   park(){
//     return 'stopped';
//   }
//
//   drive() {
//     return 'vroom';
//   }
// }
//
// let car;
//
// beforeEach(() => {
//   car = new Car();
// });
//
// describe('Car', () => {
//   it('can park', ()=> {
//     assert.equal(car.park(), 'stopped');
//   });
//
//   it('can drive', () =>{
//     assert.equal(car.drive(), 'vroom');
//   });
// })
