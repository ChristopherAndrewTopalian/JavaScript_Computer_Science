javascript:(
/* Random_Border_Color_with_Timer.js */
function()
{
    let theTimer;
    let isRunning = false;

    function getRandomColor()
    {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return 'rgb('+r+', '+g+', '+b+')';
    }

    function toggleColorChange()
    {
        if (!isRunning)
        {
            document.body.style.borderStyle = "solid";

            document.body.style.borderColor = "rgb(255, 255, 255)";

            theTimer = setInterval(function()
            {
                document.body.style.borderColor = getRandomColor();
            }, 1000);
        }
        else
        {
            clearInterval(theTimer);

            document.body.style.backgroundColor = '';
        }
        isRunning = !isRunning;
    }

    toggleColorChange();

    document.body.addEventListener('click', toggleColorChange);

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

