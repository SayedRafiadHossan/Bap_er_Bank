// step-1: add event listener to the deposit button

document.getElementById("btn-deposit").addEventListener("click", function () {
  //step-2: get the disopit amount from the deposit input FileSystemDirectoryHandle
  //for input field use .value to the value inside the input field

  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  //step-3: Get the deposite total amount
  //for non-input(element other than input, textarea) use inner get the text
  const depositeTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositeTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  //step-4: add numbers to set the total deposit

  const currentDepositiTotal = previousDepositTotal + newDepositAmount;
  //set the deposit total
  depositeTotalElement.innerText = currentDepositiTotal;

  //step-5: get balance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //step-6: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  //set the balace total
  balanceTotalElement.innerText = currentBalanceTotal;

  //step-7: clear the deposite field
  depositField.value = "";
});
