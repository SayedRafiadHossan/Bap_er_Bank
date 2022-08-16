document.getElementById("btn-withdraw").addEventListener("click", function () {
  //step-2:
  const withdrawField = document.getElementById("withdraw-field");
  const newWithDrawAmountString = withdrawField.value;
  const newWithDrawAmount = parseFloat(newWithDrawAmountString);
  const WithdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = WithdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  //step-4
  const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
  WithdrawTotalElement.innerText = currentWithdrawTotal;
  //step-5
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //step-6:
  const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;

  withdrawField.value = "";
});
