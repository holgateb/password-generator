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

function generatePassword() {
var characters = []
var length = prompt("How many characters would you like your password to be?");

if(length < 8 || length > 128)
  alert("Password must be between 8 and 128 characters.");

if(length >= 8 && length <= 128) {
  var wantNumbers = window.confirm("Do you want to include numbers?");
  var wantUpper = window.confirm("Do you want to include upper case letters?");
  var wantLower = window.confirm("Do you want to include lower case letters?");
  var wantSpecial = window.confirm("Do you want to include special characters?");
}

if(wantNumbers || wantUpper || wantLower || wantSpecial) {
  if(wantNumbers)
  characters = characters.concat(numbers);
  if(wantUpper)
  character = characters.concat(uppercase);
  if(wantLower)
  characters = characters.concat(lowercase);
  if(wantSpecial)
  characters = characters.concat(special);
}

for ( var i = 0, i < length, i++ ) {
  var randomCharacter = math.floor(math.random() * characters.length);
  characters.push(i)
  // console.log(randomCharacter)
}

return(randomCharacter)
}


