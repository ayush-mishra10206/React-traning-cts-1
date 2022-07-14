var Account = /** @class */ (function () {
    function Account(amount, firstName, date) {
        this.amount = amount;
        this.firstName = firstName;
        this.date = date;
    }
    return Account;
}());
var accntHolder = new Account(123, 'ayush', new Date());
console.log('amount : ', accntHolder.amount);
console.log('firstName : ', accntHolder.firstName);
console.log('Date : ', accntHolder.date);
