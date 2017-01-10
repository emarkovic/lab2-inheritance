class CheckingAccount {
	private ownerName:string;
	private balance:number;	
	
	constructor(ownerName:string, initialBalance:number) {
		this.balance = initialBalance;
		this.ownerName = ownerName;
	}

	deposite(amount:number) {
		this.balance += amount;
	}

	withdraw(amount:number) {
		this.balance -= amount;
	}

	checkBalance() {
		console.log(`Balanace for ${this.ownerName}'s checking account: $${this.balance}`);
	}	
}

let myChecking = new CheckingAccount('Ena', 10000);
console.log('initial balance');
myChecking.checkBalance();
console.log('deposited 1000');
myChecking.deposite(1000);
myChecking.checkBalance();
console.log('widthdrew 1000');
myChecking.withdraw(1000);
myChecking.checkBalance();