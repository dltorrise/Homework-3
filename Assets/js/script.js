// HOMEWORK-3
// No more working in the file
// ONLY WORK FROM BRANCH

/*In my own time, I would like to add local storage for the
length and also clipboard icon*/

//DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const createEl = document.getElementById('create');
const clipboard = document.getElementById('clipboard');
const generateEl = document.getElementById('generate');
const criteriaEl = document.querySelector('.criteria');

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

//adds event listener to generate button (second button)
create.addEventListener('click', () => {
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
		clipboard.classList.add('hidden');
		//code will be unreachable if not written after the return statement

		return '';
	}
	
	if(length<8 || length>128) {
		alert("Password must be between 8 and 128 characters")
		//the purpose of these is so that if you don't meet the 
		//constraints you don't still have to look at that
		//ugly copy button
		clipboard.classList.add('hidden');
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
	
	//displayMessage("Congratulations! You have generated a super secure password. Copy to your clipboard or generate another one!");
	//actually need to create a displaymessage function

	clipboard.classList.remove('hidden');
	return finalPassword;
};

// function displayMessage() {
// 	//empty div and grab with query selector and just update text content
// }

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

//can also use window.prompt(), window.confirm() for criteria

//event listener so when you click btn it runs functions
generateEl.addEventListener('click', function() {
	generateEl.classList.add('hidden');
	criteriaEl.classList.remove('hidden');
	createEl.classList.remove('hidden');
});


