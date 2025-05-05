javascript:(
/* input.js */
function()
{
    function makePlayerInput()
    {
        let playerInput = document.createElement('input');
        playerInput.type = 'number';
        playerInput.min = 1;
        playerInput.max = 5;
        playerInput.style.position = 'fixed';
        playerInput.style.marginLeft = '50%';
        playerInput.style.marginRight = '50%';
        playerInput.style.top = 5 + 'px';
        playerInput.onchange = function()
        {
            console.log(playerInput.value);
        }
        document.body.append(playerInput);
    }

    makePlayerInput();
}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

