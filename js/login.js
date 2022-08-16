document.getElementById("btn-submit").addEventListener("click", function () {
  //ste-2: get the email address inside the email input field
  //always remember to use use .value to get text from an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //stepp-3: get password
  //a: set  id on the html element
  //b: get the element
  //c: get the value form the element
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;

  // Do Not verify email password on the client side
  //step-4: varify email & password and valid or invalid
  if (email === "rafiad@gmail.com" && password === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("Invalid user");
  }
});
