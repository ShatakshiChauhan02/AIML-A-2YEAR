/*Create a class BankAccount with accountNo, holderName and balance. Use a constructor to initialize
the account. Provide instance methods deposit(amount), withdraw(amount), and displayBalance()
Withdrawal should not be allowed when the requested amount is greater than the available balance.
Create a static method bankInfo() that displays the bank name and general banking information. Create
two account objects and perform different transactions on them*/

class BankAccount {
    constructor(accountNo, holderName, balance) {
        this.accountNo = accountNo;
        this.holderName = holderName;
        this.balance = balance;
    }

    static bankInfo() {
        console.log("=== Welcome to Global Trust Bank ===\n");
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited Rs. ${amount} into ${this.holderName}'s account. New Balance: Rs. ${this.balance}`);
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log(`Withdrawal of Rs. ${amount} failed for ${this.holderName}. Insufficient funds!`);
        } else if (amount > 0) {
            this.balance -= amount;
            console.log(`Withdrew Rs. ${amount} from ${this.holderName}'s account. New Balance: Rs. ${this.balance}`);
        } else {
            console.log("Invalid withdrawal amount.");
        }
    }

    displayBalance() {
        console.log(`Account No: ${this.accountNo} | Holder: ${this.holderName} | Current Balance: Rs. ${this.balance}`);
    }
}

BankAccount.bankInfo();

let acc1 = new BankAccount(101, "Aman", 5000);
let acc2 = new BankAccount(102, "Sita", 3000);

console.log("--- Transactions for Aman ---");

acc1.displayBalance();
acc1.deposit(2000);
acc1.withdraw(1500);
acc1.withdraw(8000);

console.log("\n--- Transactions for Sita ---");

acc2.displayBalance();
acc2.withdraw(4000);
acc2.deposit(1500);
acc2.withdraw(4000);

console.log("\n--- Final Account Details ---");

acc1.displayBalance();
acc2.displayBalance();