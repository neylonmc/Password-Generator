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

  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

