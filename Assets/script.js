// Assignment Code
//HOMEWORK

//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

//puts all function into an object
const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
};

//clipboard
clipboard.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;
	
	if(!password) { return; }
	
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();
	alert('Password copied to clipboard');
});

//adds event listener to generate button
generate.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;
	
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
	//runs function so long as all parameters are set
});

//function that's put in event listener
function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		alert("You must check at least one box");
		//code will be unreachable if not written after the return statement
		return '';
	}
	
	if(length<8 || length>128) {
		alert("Password must be between 8 and 128 characters")
		return ''
	}
	
	// create a loop
	for(let i=0; i<length; i+=typesCount) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	// for some reason this isn't working and also throws off the rest of code 
	// if (finalPassword !== '') {
	// displayMessage("Congratulations! You have generated a super secure password. Copy to your clipboard or generate another one!");
	// }

	return finalPassword;
};

//functions to get random letters, numbers, and characters
//use from CharCode object and looks up numbers associated with certain characters
//using Math.floor() and Math.random() to spit out a random character

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
};







//criteria

//grabs element you want to insert HTML into

document.createElement('p');

const criteria = document.getElementById('criteria')

//html you want to insert

const html = '<p>help</>'
console.log(html)

//creates a function that adds in HTML
const clickHandler = () => {
  criteria.innerHTML = html
};
//event listener so when you click btn it runs functions
generate.addEventListener('click', clickHandler);


//this should work
//it should spit out the criteria and then once the criteria is checked it will allow other
//event listener to work

//then somehow make it so event listener generates password
//after second click 