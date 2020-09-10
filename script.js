// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); 
  passwordText.value = password;
  
}

//Generate Password for Password Generator. 

function generatePassword() {
  console.log("Generate Password Here"); // make sure the page is working. 

  //Set up the length for the password:

  var length = Number (
    prompt("How long would you like your password to be? Please choose between 8-128 characters.")
  ); 

  //See how many characters the user would like to have:
  console.log("The user chose: " + length);

  //Create a min/max password length. 
  if (length <8 || length >128) {
    alert ("Please choose a password length between 8-128");
    return;
  }

  //possible characters in array format. 
  var numerical = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];
  var chosenChar = []; //Array for the users selected characters. 

  //Confirms asking the user what type of characters they would like to use. 
  var useNumerical = confirm("Would you like to have numbers in your password?");
  var useLowerCase = confirm("Would you like to have lower case letters in your password?");
  var useUpperCase = confirm("Would you like to have upper case letters?");
  var useSpecialChar = confirm("Would you like to have any special characters in your password? Example: !@#$%^&*()_+");

  //Check their answers..
  console.log (useNumerical, useLowerCase, useUpperCase, useSpecialChar );

  //Create arrays based on their answers using .push: 


 if (useNumerical) {
  chosenChar.push(numerical);
  }; 

  if (useLowerCase) {
  chosenChar.push(lowerCase);
  };

  if (useUpperCase) {
  chosenChar.push(upperCase);
  };

  if (useSpecialChar) {
  chosenChar.push(specialChar);
  }; 

  //See Arrays of the chosen variables. 
  console.log(chosenChar); 

  //Create a loop to loop chosen characters in array at random. 
  for(var i=0; i < length; i++) {

    //Created new variables to select characters. 
    var randomArrays;
    var CharacterArray;
    var randomNumber;
    var passwordChosen; 


    //Selects random password for user using a randomized arrays. 
    randomArrays = (Math.floor(Math.random() * chosenChar.length));
    console.log(randomArrays); //selects random arrays based on chosen character length. 

    CharacterArray = chosenChar[randomArrays];
    console.log(CharacterArray + " random array chosen"); 

    randomNumber = (Math.floor(Math.random() * CharacterArray.length)); 
    console.log("Selected character index in randomized order " + randomNumber); //randomly selects index number from selected array

    passwordChosen = CharacterArray[randomNumber]; 
    console.log(passwordChosen + " is the chosen password from this array"); //selects character from the chosen index number. 

    password += passwordChosen //password
  
  }
  return password;
} 

password = [0]; 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

