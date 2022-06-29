/*
Due: Monday 6/27
Project 2: Virtual ATM Machine (OOP Project)
- Build a console app that mimics an atm machine
- Persistent balance (crudable [add, remove, null, get])
- Main Menu that routes to other menus 
  *********
  Welcome
  1) view balance
   ..... etc
  *********
- Redirect back to the main menu
- Error handling for withdrawals 
- Deposit
- Exit the program via selection
- Receipt 


HAVE FUN
*/

class Account {
  constructor() {
    this.name = prompt("Enter Your Name: ");
    this.balance = 0;
  }

  deposit() {
    console.clear();
    console.log("Deposit Menu");
    console.log("------------");
    console.log("1) Deposit Entry");
    console.log("2) Main Menu");
    let response = prompt("Response:");
    while (response !== "1" && response !== "2") {
      alert("Invalid Entry");
      response = prompt("Response:");
    }
    if (response === "1") {
      let newResponse = prompt("Deposit Amount:");
      this.balance = this.balance + Number(newResponse);
    } else {
      this.balance = this.balance;
    }
  }

  withdraw() {
    console.clear();
    console.log("Withdrawal Menu");
    console.log("---------------");
    console.log("1) Withdrawal Entry");
    console.log("2) Main Menu");
    let response = prompt("Response:");
    while (response !== "1" && response !== "2") {
      alert("Invalid Entry");
      response = prompt("Response:");
    }
    while (response !== "2") {
      if (response === "1") {
        let withdrawal = Number(prompt("Withdrawal amount:"));
        if (withdrawal > this.balance) {
          alert("Insufficient Funds");
          response = prompt("Response:");
        } else {
          this.balance = this.balance - withdrawal;
          response = prompt("Response:");
        }
      }
    }
    this.balance = this.balance;
  }

  printBalance() {
    console.clear();
    console.log("Account Balance");
    console.log("---------------");
    console.log(`Balance: $${this.balance}`);
    console.log("");
    console.log("1) Main Menu");
    let response = prompt("Response:");
    while (response !== "1") {
      alert("Invalid Entry");
      response = prompt("Response:");
    }
  }

  printReceipt() {
    console.clear();
    console.log("Receipt");
    console.log("-------");
    console.log(`Balance: $${this.balance}`);
    console.log("");
  }

  static deleteAccount(account) {
    account = null;
  }
}

function startAtm() {
  let userAccount = new Account();
  let active = true;
  let input;

  while (active === true) {
    console.log("Welcome!");
    console.log(`Account Owner: ${userAccount.name}`);
    console.log("");
    console.log("Options:");
    console.log("--------------");
    console.log("1) View Balance");
    console.log("2) Withdraw");
    console.log("3) Deposit");
    console.log("4) Quit");
    console.log("");
    console.log("5) Delete Account");
    input = prompt("Response:");
    switch (input) {
      case "1":
        userAccount.printBalance();
        console.clear();
        break;
      case "2":
        userAccount.withdraw();
        console.clear();
        break;
      case "3":
        userAccount.deposit();
        console.clear();
        break;
      case "4":
        active = false;
        userAccount.printReceipt();
        console.log("Goodbye!");
        break;
      case "5":
        Account.deleteAccount(userAccount);
        active = false;
        console.clear();
        console.log("Account Deleted. Goodbye!");
        break;
      default:
        console.log("Invalid Choice");
    }
  }
}

const sleep = () => new Promise((resolve) => setTimeout(resolve, 1000));

startAtm();
