javascript:(
/* Password_Generator_Specify_How_Many_Characters_with_Input_Validation.js */
function()
{
    function generatePassword(length) {
        let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?/{}[]";

        let password = "";

        /* generate random characters for password */
        for (let x = 0; x < length; x++)
        {
            let randomIndex = Math.floor(Math.random() * characters.length);

            password += characters.charAt(randomIndex);
        }

        return password;
    }

    /* prompts user for password length and validate the input */
    function makePassword()
    {
        let passwordLength = prompt("Enter how many characters");

        if (passwordLength !== null)
        {
            let parsedLength = parseInt(passwordLength);

            /* check for valid length */
            if (!isNaN(parsedLength) && parsedLength > 0)
            {
                /* generate password with specified length */
                let generatedPassword = generatePassword(parsedLength);

                console.log("Password is " + generatedPassword);

                alert("Password is " + generatedPassword);
            }
            else
            {
                alert("You didn't enter how many characters you want the password to be.");
            }
        }
    }

    makePassword();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

