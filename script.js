// // establish variables.
var p;
function check(){
    const x = document.getElementById("length").value;
    // check length is greater than 8 and less than 128
    if( x < 8 || x > 128){
        console.log(x);
        confirm("Choose a number between 8 and 128.")
        return
    } else {
        var len = document.getElementById("length").value;
        var l = document.getElementById("lowerCase").checked;
        var u = document.getElementById("upperCase").checked;
        var n = document.getElementById("numbers").checked;
        var s = document.getElementById("special").checked;
        p = [len,l,u,n,s]
        main()
    }
}

function main(){
    var setLength = p[0]
    var setLowerCase = p[1]
    var setUpperCase = p[2]
    var setNumbers = p[3]
    var setSpecial = p[4]

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
        }
        if(setUpperCase === true){
            parametersArray.push(upperAlphabet)
        }
        if(setNumbers === true){
            parametersArray.push(number)
        }
        if(setSpecial === true){
            parametersArray.push(special)
        }

        // creates a string of ALL the selected parameters that can be looped through in the next step.
        var parameters = parametersArray.join("")

        // generates characters for password by looping through the password array equal to the set length
        for(var i = 0; i < length; i++){
            passwordArray.push(parameters[Math.floor(Math.random() * parameters.length)]);
        }

        // joins characters in Password array to form a password
        var password = passwordArray.join("");
        document.getElementById("passFieldArea").innerHTML = password;
        // document.write(password);
    }
    // runs password function.
    // side note what if i gave the function values such as generatePassword(length, lower, upper, number, special)...
    generatePassword()
}

