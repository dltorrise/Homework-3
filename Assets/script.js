// Assignment Code
//HOMEWORK

//DOM elements
const resultEL = document.getElementById('result');
const lengthEL = document.getElementById('length');
const upperCaseEL = document.getElementById('uppercase')
const lowerCaseEL = document.getElementById('lowercase')
const numbersEL = document.getElementById('numbers')
const symbolsEL = document.getElementById('symbols')
const generateEL = document.getElementById('generate')
const clipboardEL = document.getElementById('clipboard')

//copy password to clipboard
clipboardEL.addEventListener("click", ()=> {
  const textarea = document.createElement('textarea')
  const password = resultEL.innerText;
  if(!password) {
    return
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  textarea.remove();
  alert('Password copied to clipboard')
});

//this event listener is just getting values
generateEL.addEventListener("click", ()=> {
  //arrow function
  const length = +lengthEl.value;
  console.log(length);
  //errnary operator will make it into a number
  const hasLower =  lowerCaseEL.checked;
  //.checked property will return either true or false
  const hasUpper =  upperCaseEL.checked;
  const hasNumber =  numbersEL.checked;
  const hasSymbol =  symbolsEL.checked;
  console.log(hasLower, hasUpper, hasNumber, hasSymbol);
//function to actually generate password stored in resultEl
  resultEL.innerText = generatePassword(hasLower, hasUpper, hasSymbol, length);
});

//function to actually generate password
function generatePassword(lower,upper,number,symbol,length) {
  //string to build on
  let generatePassword = '';
  //filter out unchecked types
  const typesCount = lower + upper + number + symbol;
  console.log('typesCount: ', typesCount);
  //counts number of checked values
  const typesArray =  [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
  //creates an array with key value pairs and filters out whatever is false
  console.log(typesArray)
  if(typesCount===0) {
    return '';
  }
  for (leti=0;i<length;i+=typesCount) {
    typesArray.forEach(type => {
      const funcName = Object.keys(type)[0];
      console.log('funcName: ', funcName);
      generatedPassword += randomFunc[funcName]();
    })
    const finalPassword = generatedPassword.slice(0,length);
    console.log(generatedPassword.slice(0,length));
    return finalPassword;
  }
  //loop over length call generator function for each type
  //add final password to password variable
}
//object to hold all generator functions
const randomFunc = {
  lower: getRandomL,
  upper: getRandomU,
  number: getRandomN,
  symbol: getRandomS
};

//generator function
//used .charcode property to get random character
//gets a random lowercase letter
function getRandomL() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

console.log(String.fromCharCode(Math.floor(Math.random() * 26) + 97))

//gets a random uppercase letter
function getRandomU() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log( String.fromCharCode(Math.floor(Math.random() * 26) + 65))

//gets a random number
function getRandomN() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log ( String.fromCharCode(Math.floor(Math.random() * 10) + 48))

//gets a random symbol
function getRandomS() {
  const symbols = '!@#$%^&*(){}[]=<>/,.';
  return symbols [Math.floor(Math.random() * symbols.length)]
}

// var generateBtn = document.querySelector("#generate");

//  //stip forgetting this second parenthesis!!!
// //insert HTML once you click button
// //arrow function???
// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;

// }

// var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var passwordLength = 12;
// var password = "";

// for (var i = 0; i <= passwordLength; i++) {
//   var randomNumber = Math.floor(Math.random() * chars.length);
//   password += chars.substring(randomNumber, randomNumber +1);
//  }

//  const html = '<select id="criteria" size="3"><option value="character-type">5 or more unique characters</option><option value="length-of-password">Length of Password</option><option value="fiat">Fiat</option><option value="audi">Audi</option>'
// // var specifiedLength = //document query for input
// //Password criteria
// // At least 10 characters (and up to 100 characters)
// // 5 or more unique characters.
// // At least 3 of the following: uppercase, lowercase, numeric, or special characters. 
// // //special characters I find acceptable to put in a password
// //other ones do not make sense

// //if checkbox checked append it onto final array
// alphabet = chars.split('');

// console.log(alphabet);
// //puts it into array

// index = Math.floor(Math.random()*alphabet.length);
// passwordText.textContent += alphabet[index] //add letter to end of password
// //can generate random numbers to index random characters and append them only generated password

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword());
// //index the array with math.random() to spit out a number
// //for less than the specified length of password
// //array that is selected depends on constraints

// //Click button
// // Criteria
// // 8-28 characters
// // lowercase, uppercase, numeric, and/or special characters
// // at least one character type should be selected
// //then generate