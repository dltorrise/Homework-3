// Assignment Code
//HOMEWORK
var generateBtn = document.querySelector("#generate");

 //stip forgetting this second parenthesis!!!
//insert HTML once you click button
//arrow function???
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}



var alphabet = "abcdefghijklmnopqerstuvwxyz";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numbers = "1234567890"
var specialCharacters = "`!@#$%&*_+=?"

//if checkbox checked append it onto final array
alphabet = alphabet.split('');

console.log(alphabet);
//puts it into array

Math.random();
//can generate random numbers to index random characters and append them only generated password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
//index the array with math.random() to spit out a number
//for less than the specified length of password
//array that is selected depends on constraints

//Click button
// Criteria
// 8-28 characters
// lowercase, uppercase, numeric, and/or special characters
// at least one character type should be selected
//then generate