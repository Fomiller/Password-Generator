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

// // establish variables.
var p;

function check(){
    // check length is greater than 8 and less than 128
    if( len < 8 || len > 128){
        confirm("Choose a number between 8 and 128.")
    }else{
        var len = document.getElementById("length").value;
        var l = document.getElementById("lowerCase").checked;
        var u = document.getElementById("upperCase").checked;
        var n = document.getElementById("numbers").checked;
        var s = document.getElementById("special").checked;
        console.log(len)
        console.log(l,u,n,s);
        return p = [len,l,u,n,s]
    }
}

function main(){
    var setLength = p[0]
    var setLowerCase = p[1]
    var setUpperCase = p[2]
    var setNumbers = p[3]
    var setSpecial = p[4]
    console.log("-------------");
    console.log(setLength)
    console.log(setLowerCase)
    console.log(setUpperCase)
    console.log(setNumbers)
    console.log(setSpecial)

// function to generate password given above values.
function generatePassword(){
    password = []
    passwordArray = []
    parametersArray = []

    var lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
    var upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var number = "0123456789";
    var special = "!#$%&')*(+,-./:;=>?@[]^_`{|}~"
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
    document.getElementById("passField").innerHTML = password;
    // document.write(password);
}
    // runs password function.
                // side note what if i gave the function values such as generatePassword(length, lower, upper, number, special)...
    generatePassword()

}

