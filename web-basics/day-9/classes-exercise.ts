class Account {
    amount: number;
    firstName: string;
    date: Date;

    constructor(amount: number, firstName: string, date: Date) {
        this.amount = amount;
        this.firstName = firstName;
        this.date = date
    }
}

let accntHolder: Account = new Account(123, 'ayush', new Date());

console.log('amount : ', accntHolder.amount)
console.log('firstName : ', accntHolder.firstName)
console.log('Date : ',accntHolder.date)