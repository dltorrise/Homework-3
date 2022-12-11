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

var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 12;
var password = "";

for (var i = 0; i <= passwordLength; i++) {
  var randomNumber = Math.floor(Math.random() * chars.length);
  password += chars.substring(randomNumber, randomNumber +1);
 }

// var specifiedLength = //document query for input


//special characters I find acceptable to put in a password
//other ones do not make sense

//if checkbox checked append it onto final array
alphabet = chars.split('');

console.log(alphabet);
//puts it into array

index = Math.floor(Math.random()*alphabet.length);
passwordText.textContent += alphabet[index] //add letter to end of password
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