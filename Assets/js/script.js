// HOMEWORK-3
// No more working in the file
// ONLY WORK FROM BRANCH
// To check branch: git rev-parse --abbrev-ref HEAD

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
const message = document.getElementById('display-message')


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
	localStorage.setItem("length", length); //sets length in local storage based on what you inputted
	setValue(); 
	resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
	//runs function so long as all parameters are set

});

function setValue() {
	var length = localStorage.getItem("length"); //gets length from local storage
	lengthEl.setAttribute("value", length); //i'm thinking maybe that this isn't working
	console.log(length)
}

//function that's put in event listener
function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);
	
	// Doesn't have a selected type
	if(typesCount === 0) {
		alert("You must check at least one box");
		clipboard.classList.add('hidden');
		message.textContent = ''
		//code will be unreachable if not written after the return statement

		return '';
	}
	
	if(length<8 || length>128) {
		alert("Password must be between 8 and 128 characters")
		//the purpose of these is so that if you don't meet the 
		//constraints you don't still have to look at that
		//ugly copy button
		clipboard.classList.add('hidden');
		message.textContent = ''
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
	// for some reason this messes up my entire code
	 //theoretically this should update the length in the local storage
	//runs function to update value of input element in local storage
	displayMessage();
	clipboard.classList.remove('hidden');
	return finalPassword;
};



function displayMessage() {
	message.textContent = "Congratulations! You have generated a super secure password. Copy to your clipboard or generate another one!"
}

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


setValue(); //runs function everytime page is reloaded