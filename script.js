// Assignment code here
var numberBase = "12345467567"
var upperCaseBase 
var lowerCaseBase
var specialBase
var passwordBase  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  var passwordLength = prompt("Please enter your desired password length")
  console.log(passwordLength)

  if (passwordLength>128 || passwordLength<8){
    window.alert("Your password must be between 8-128 characters long")
    generatePassword()
  }

  var userWantsUppercase = window.confirm("Do you want uppercase letters")



}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
