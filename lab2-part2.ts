class SavingsAccount {
     constructor (private initialBalance:number, private ownerName:string, private totalWithdrawls = 0){}

    deposit(userDeposit:number) {
        this.initialBalance += userDeposit;
    }

    withdraw(userWithdraw:number) {
        this.totalWithdrawls = userWithdraw + 1
        if (this.totalWithdrawls <= 3) {
            this.initialBalance -= userWithdraw;
        } else {
            console.log(`Sorry homie, you can't withdraw any more money. You've exceed 3 withdrawls`);
        }
    }

    checkBalance() {
        console.log(`${this.ownerName} + You have  ${this.initialBalance} in your Checkings account`);
    }
}