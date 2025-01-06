javascript:(
/* Password_Generator_Specify_How_Many_Characters_without_Validation.js */
function()
{
    function makePassword()
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

            let generatedPassword = generatePassword(parsedLength);

            console.log("Password is " + generatedPassword);

            alert("Password is " + generatedPassword);
        }
    }

    makePassword();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

