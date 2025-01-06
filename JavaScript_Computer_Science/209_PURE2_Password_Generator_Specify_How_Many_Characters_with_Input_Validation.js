javascript:(
/* Password_Generator_Specify_How_Many_Characters_with_Input_Validation.js */
function()
{
    function generatePassword(whichAmount)
    {
        let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?/{}[]";

        let password = "";

        for (let x = 0; x < whichAmount; x++)
        {
            let randomIndex = Math.floor(Math.random() * characters.length);

            password += characters.charAt(randomIndex);
        }

        return password;
    }

    let passwordLength = prompt("Enter how many characters");

    if (passwordLength !== null)
    {
        let parsedLength = parseInt(passwordLength);

        if (!isNaN(parsedLength) && parsedLength > 0)
        {
            let generatedPassword = generatePassword(parsedLength);

            console.log("Password is " + generatedPassword);

            alert("Password is " + generatedPassword);
        }
        else
        {
            alert("You didn't enter how many characters you want the password to be.");
        }
    }

    generatePassword();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

