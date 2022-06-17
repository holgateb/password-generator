var generateBtn = document.querySelector("#generate");

var numbers = "1234567890".split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var special = "!@#$%^&*()_+-=".split("");

function generatePassword() {
  var characters = [];
  var length = parseInt(
    prompt("How many characters would you like your password to be?")
  );

  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters.");
    return null;
  }

  var wantNumbers = confirm("Do you want to include numbers?");
  var wantUpper = confirm("Do you want to include upper case letters?");
  var wantLower = confirm("Do you want to include lower case letters?");
  var wantSpecial = confirm("Do you want to include special characters?");

  if (!wantLower && !wantNumbers && !wantUpper && !wantSpecial) {
    alert("You need to choose at least one type of character, please.");
    return null;
  }

  if (wantNumbers || wantUpper || wantLower || wantSpecial) {
    if (wantNumbers) characters = characters.concat(numbers);
    if (wantUpper) characters = characters.concat(uppercase);
    if (wantLower) characters = characters.concat(lowercase);
    if (wantSpecial) characters = characters.concat(special);
  }

  var password = [];
  for (var i = 0; i < length; i++) {
    var randomCharacter = Math.floor(Math.random() * characters.length);
    password.push(characters[randomCharacter]);
  }

  return password.join("");
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
