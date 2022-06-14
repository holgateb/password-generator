var generateBtn = document.querySelector("#generate");
var numbers = "1234567890".split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var special = "!@#$%^&*()_+-=".split("");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
