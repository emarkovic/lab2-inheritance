// prototypal inheritance walkthrough code goes here

'use strict';

// create an object literal for account which automatically clones Object.prototype and extends it
var Account = {
  // notice the lack of a constructor 
  deposit: function (amount) {
    this.balance = this.balance + amount;
  },
  withdraw: function (amount) {
    this.balance = this.balance - amount;
  },
  checkBalance: function (amount) {
    console.log(`${this.owner} account balance: $${this.balance}`);
  }
}

var CheckingAccount = Object.create(Account);
CheckingAccount.checkBalance = function () {
  console.log('Checking account');
  Account.checkBalance();
}
CheckingAccount.owner = 'Ena';
CheckingAccount.balance = 20;
console.log(CheckingAccount)
CheckingAccount.checkBalance();

var SavingsAccount = Object.create(Account);
SavingsAccount.withdrawls = 0;
SavingsAccount.checkBalance = function () {
  console.log('Savings account');
  Account.checkBalance();
}
SavingsAccount.withdraw = function (amount) {
  if (this.balance > 0) {
    if (this.withdrawls < 3) {
      Account.withdraw();
      this.withdrawls--;
    } else {
      console.log('Cannot withdraw, exceeds limit');
    }
  } else {
    console.log('Cannot withdraw, balance is 0');
  }
}


// create a new Account object by using account object as the proto
let account = Object.create(CheckingAccount);
// give the account an owner and a balance (since we can't have a constructor with this syntax)
account.owner = "Ethan";
account.balance = 20;
// account.checkBalance();
// account.deposit(40);
// account.checkBalance();
// account.withdraw(30);
// account.checkBalance();
