class Account {
	private ownerName:string;
	private balance:number;

	constructor(ownerName:string, initialBalace:number) {
		this.ownerName = ownerName;
		this.balance = initialBalace;
	}

	deposite(amount:number) {
		this.balance += amount;
	}

	withdraw(amount:number) {
		this.balance -= amount;
	}

	checkBalance() {
		console.log(`Balanace for ${this.ownerName}'s account: $${this.balance}`)
	}
}

class CheckingAccount extends Account {
	constructor(ownerName:string, initialBalace:number) {
		super(ownerName, initialBalace);
	}

	checkBalance() {
		console.log('Checking account');
		super.checkBalance();
	}
}

class SavingsAccount extends Account {
	private withdrawls:number;

	constructor(ownerName:string, initialBalace:number) {
		super(ownerName, initialBalace);
		this.withdrawls = 0;		
	}

	withdraw(amount:number) {
		if (this.withdrawls < 3) {
			super.withdraw(amount);
			this.withdrawls++;
		} else {
			console.log('Cannot withdrawls, limit exceeded.');
		}
	}	

	checkBalance() {
		console.log('Savings account');
		super.checkBalance();
	}
}

let mySavings:Account = new SavingsAccount('Ena', 1000);
// mySavings.checkBalance();
mySavings.withdraw(100);
mySavings.withdraw(100);
mySavings.withdraw(100);
// mySavings.checkBalance();
//limit
mySavings.withdraw(100);
// mySavings.checkBalance();

let myChecking:Account = new CheckingAccount('Ena', 1000);
myChecking.checkBalance();
myChecking.withdraw(100);
myChecking.withdraw(100);
myChecking.withdraw(100);
myChecking.checkBalance();
//savings limit, shouldnt effect checking
myChecking.withdraw(100);
myChecking.checkBalance();















































