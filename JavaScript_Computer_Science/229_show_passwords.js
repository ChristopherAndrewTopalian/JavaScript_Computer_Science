javascript:(
/* show_passwords.js */
function()
{
    function showPasswords()
    {
        let inputs = document.getElementsByTagName('input');

        for (let i = 0; i < inputs.length; i++)
        {
            if (inputs[i].type === 'password')
            {
                inputs[i].type = 'text';
            }
        }
    }
    showPasswords();
}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

