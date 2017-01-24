var accounts = [];

function createAccount(account) {
  accounts.push(account);
  return account;
}

function getAccount(username) {
  var matchedAccount;

  for(var i = 0; i < accounts.length; i++) {
    if(accounts[i].username === username) {
      matchedAccount = accounts[i];
    }
  }

  return matchedAccount;
}

function deposit(account, amount){
  if(typeof amount === 'number'){
    account.balance += amount;
  }
}

function withdraw(account, amount){
  if(typeof amount === 'number'){
    account.balance -= amount;
  } else {
    console.log('withdraw failed, amount is not a number.')
  }
}

function getBalance(account){
  return account.balance;
}

function createBalanceGetter(account){
  return function (){
    return account.balance;
  }
}

var derek = createAccount({
  username: 'Derek',
  balance: 0
});


deposit(derek, 120);
withdraw(derek, 'string');

var derek2 = getAccount('Derek');
var getDerekBalance = createBalanceGetter(derek2);

console.log(getDerekBalance());
