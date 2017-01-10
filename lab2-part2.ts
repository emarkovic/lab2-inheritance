class SavingsAccount {
	private ownerName:string;
	private balance:number;	
	private withdrawls: number;
	
	constructor(ownerName:string, initialBalance:number) {
		this.balance = initialBalance;
		this.ownerName = ownerName;
		this.withdrawls = 0;
	}

	deposite(amount:number) {
		this.balance += amount;
	}

	withdraw(amount:number) {
		if (this.withdrawls < 3) {
			this.balance -= amount;
			this.withdrawls++;
		} else {
			console.log('Cannot withdrawls, limit exceeded.');
		}		
	}

	checkBalance() {
		console.log(`Balanace for ${this.ownerName}'s savings account: $${this.balance}`);
	}	
}

let myChecking = new SavingsAccount('Ena', 10000);
console.log('initial balance');
myChecking.checkBalance();

myChecking.withdraw(1000);
myChecking.checkBalance();
myChecking.withdraw(1000);
myChecking.checkBalance();
myChecking.withdraw(1000);
myChecking.checkBalance();
//limit
myChecking.withdraw(1000);
myChecking.checkBalance();