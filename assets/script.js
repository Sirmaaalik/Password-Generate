// Assignment code here
// Variables for all of my questions
// Variables for all of my strings
var Numbers = '0123456789';
var Specials =  "!#$%&'(\)*+,-./:;<=>?@[]^_`{|}~";
var Lowers = 'abcdefghijklmnopqrstuvwxyz';
var Uppers = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var result = '';
var bank = '';

// Checking if they want these to apply or leave out for their password
function results() {

  // Loop to make the user pick a number between 8 & 128
  while (!produce || produce < 8 || produce > 128) {
    alert("You need an amount between 8 and 128.");
    var answer = prompt("Enter the amount of chracters from 8 - 128.");
    var produce = answer;
  }

  while(!questionNum && !questionSpec && !questionLow && !questionUp) {
    alert("Please select at least one criteria!");
    var questionNum = confirm("Click to incorporate numbers.");
    var questionSpec = confirm("Click to incorporate special characters.");
    var questionLow = confirm("Click to include lowercase letters.");
    var questionUp = confirm("Click to include uppercase letters.");
}

if(questionNum) {
  bank += Numbers;
  }
  if(questionSpec) {
    bank += Specials;
  }
  if(questionLow) {
    bank += Lowers;
  }
  if(questionUp) {
    bank += Uppers;
  }  

  for (let i = 0; i < produce; i++) {
  result += (bank.charAt(Math.floor(Math.random() * bank.length)));
  }
  console.log(result);
  return result;
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = results();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
