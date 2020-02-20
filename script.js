// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page





function check(){
    var x = document.getElementById("myCheck").checked;
    console.log(x);
}





function main(){
// set length
var setLength = prompt("how many characters would you like your password to be? \nIt must be at least 8 characters long, and no longer than 128 characters");

// requires the correct input for the prompt to move on. 
while( setLength < 8 || setLength > 128){
        setLength = prompt("how many characters would you like your password to be? \nIt must be at least 8 characters long, and no longer than 128 characters");
}
// if the correct input is given then you can set your password parameters.
if(setLength >= 8 && setLength <= 128 ){
    // lowercase
    var setLowerCase = confirm("click OK if you would like lower case letters in your password.")
    console.log("lower = " + setLowerCase);
    // uppercase
    var setUpperCase = confirm("click OK if you would like upper case letters in your password.")
    console.log("upper = " + setUpperCase);
    // numbers
    var setNumbers = confirm("click OK if you would like numbers in your password.")
    console.log("numbers = " + setNumbers);
    // special characters
    var setSpecial = confirm("click OK if you would like special characters in your password.")
    console.log("special = " + setSpecial);
}

// function to generate password given above values.
function generatePassword(){
    password = []
    passwordArray = []
    parametersArray = []

    var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "0123456789";
    var special = "!@#$%^&?<>"
    var length = setLength;
    
    // checks if variables are true. If variables are true they are added to the parameter array.
    if(setLowerCase === true){
        parametersArray.push(lowerAlphabet)
        console.log(lowerAlphabet);
    }
    if(setUpperCase === true){
        parametersArray.push(upperAlphabet)
        console.log(upperAlphabet);
    }
    if(setNumbers === true){
        parametersArray.push(number)
        console.log(number);
    }
    if(setSpecial === true){
        parametersArray.push(special)
        console.log(special);
    }
    console.log("---------");


    // function for testing if the parameters were true. ran into trouble when pushing to array because what is pushed does not match the value of x.

            // function addParam(x){
            //     if( x === setLowerCase && x === true){
            //         parametersArray.push(lowerAlphabet)
            //     }else if( x === setUpperCase && x === true){
            //         parametersArray.push(upperAlphabet)
            //     }else if( x === setNumbers && x === true){
            //         parametersArray.push(numbers)
            //     }else if( x === setSpecial && x === true){
            //         parametersArray.push(special)
            //     }
            // }

            // addParam(setLowerCase);
            // addParam(setUpperCase);
            // addParam(setNumbers);
            // addParam(setSpecial);


    // logs the newely made parameters array after being pushed to
    console.log(parametersArray)

    // creates a string of ALL the selected parameters that can be looped through in the next step.
    var parameters = parametersArray.join("")
    console.log("joined - " + parameters)

    // generates characters for password by looping through the password array equal to the set length
    for(var i = 0; i < length; i++){
        passwordArray.push(parameters[Math.floor(Math.random() * parameters.length)]);
    }
    // logs newly made password array.
    console.log(passwordArray);

    // joins characters in Password array to form a password
    var password = passwordArray.join("");
    console.log(password);
    document.write(password);
}
    // runs password function.
                // side note what if i gave the function values such as generatePassword(length, lower, upper, number, special)...
    generatePassword()

}

