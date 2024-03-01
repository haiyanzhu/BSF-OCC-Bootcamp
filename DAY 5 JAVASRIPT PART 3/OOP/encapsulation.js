//Encapsulation
class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(this.balance);
  }
  withdraw(amount) {
    if (this.balance >= amount) {
        this.balance -= amount;
    } else {
        console.log("Insufficient balance!")
    }
  }  

  getAccountInfo() {
    return `your account number is : ${this.accountNumber}, and your balance is \$${this.balance}`;
  }
};

const myAccount = new BankAccount("123456789", 1000);
const regelAccount = new BankAccount("987654321", 6000);
regelAccount.deposit(500);
console.log(regelAccount.getAccountInfo());
regelAccount.withdraw(6501);
console.log(regelAccount.getAccountInfo());
regelAccount.withdraw(501);
console.log(regelAccount.getAccountInfo());
myAccount.deposit(10000);
console.log(myAccount.getAccountInfo());