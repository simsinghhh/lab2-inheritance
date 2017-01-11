class CheckingsAccount {
    constructor (private initialBalance:number, private ownerName:string){}

    deposit(userDeposit:number) {
        this.initialBalance += userDeposit;
    }

    withdraw(userWithdraw:number) {
        this.initialBalance -= userWithdraw;
    }

    checkBalance() {
        console.log(`${this.ownerName} + You have  ${this.initialBalance} in your Checkings account`);
    }
}

let checkCheckingsAccount = new CheckingsAccount (30, "Sim");
checkCheckingsAccount.checkBalance();
checkCheckingsAccount.deposit(50);
checkCheckingsAccount.checkBalance();
checkCheckingsAccount.withdraw(20);
checkCheckingsAccount.checkBalance();

//should have an initial balance remaining of $60