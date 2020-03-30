// Assignment code here

// Random Values START
// prettier-ignore
var lowercase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// prettier-ignore
var uppercase= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var spec = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var special = spec.split("");
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// Random Values END

console.log(lowercase);
console.log(uppercase);
console.log(special);
console.log(nums);

// Password Condition START
var passwordConditions = function() {
  var passLength = "";
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = prompt("Choose a password with and length between (8 - 128)");
  }
  // ^ Will force you to pick a number between 8 - 128 and won't allow non numbers
  var lowerCheck = "";
  while (lowerCheck === "") {
    lowerCheck = confirm("Would you like to include LOWERcase letters?");
  }

  var upperCheck = "";
  while (upperCheck === "") {
    upperCheck = confirm("Would you like to include UPPERcase letters?");
  }

  var numsCheck = "";
  while (numsCheck === "") {
    numsCheck = confirm("Would you like to include NUMBERS?");
  }

  var symbolCheck = "";
  while (symbolCheck === "") {
    symbolCheck = confirm("Would you like to include SYMBOLS?");
  }
  // Password Conidtion END

  // console log to confirm arrays are working in inspect element
  console.log(lowerCheck);
  console.log(upperCheck);
  console.log(numsCheck);
  console.log(symbolCheck);

  // if you pick no password condition then the program will restart and give an error message
  if (
    lowerCheck === false &&
    upperCheck === false &&
    numsCheck === false &&
    symbolCheck === false
  ) {
    alert("Please include at least one password option.");
    passwordConditions();
  } else {
    alert("Valid password choosen.");
  }

  // Will check if password conditions where chosen by the user
  // and include them in the creation of a random password
  var charsAllowed = [];
  var thestring = "";
  // only including variables that the user chooses to include into the password
  if (lowerCheck === true) {
    thestring += lowercase[Math.floor(Math.random() * lowercase.length)];
    charsAllowed = [...charsAllowed, ...lowercase];
  }
  if (upperCheck === true) {
    thestring += uppercase[Math.floor(Math.random() * uppercase.length)];
    charsAllowed = [...charsAllowed, ...uppercase];
  }
  if (numsCheck === true) {
    thestring += Math.floor(Math.random() * 9);
    charsAllowed = [...charsAllowed, ...nums];
  }
  if (symbolCheck === true) {
    thestring += special[Math.floor(Math.random() * special.length)];
    charsAllowed = [...charsAllowed, ...special];
  }

  var newstring = "";
  for (var i = 0; i < passLength - thestring.length; i++) {
    newstring += charsAllowed[Math.floor(Math.random() * charsAllowed.length)];
  } // += means newstring = newstring + charsAllowed
  console.log(newstring);

  // makes sure that included password variables aren't left out
  for (var i = 0; i < thestring.length; i++) {
    position = Math.floor(Math.random() * newstring.length);
    newstring = [
      newstring.slice(0, position),
      thestring[i],
      newstring.slice(position)
    ].join("");
  }
  console.log(newstring);
  alert(newstring);
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
