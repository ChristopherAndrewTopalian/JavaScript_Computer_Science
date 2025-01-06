javascript:(
/* First_Click_Does_X_Second_Click_Does_Y.js */
function()
{
    function mouseTriggersStyle()
    {
        let toggleFlag = false;

        document.onclick = function()
        {
            let elements = document.getElementsByTagName('*');

            for (let x = 0; x < elements.length; x++)
            {
                if (toggleFlag)
                {
                    elements[x].style.fontWeight = "normal";
                } 
                else
                {
                    elements[x].style.fontWeight = "bold";
                }
            }

            toggleFlag = !toggleFlag;
        };
    }

    mouseTriggersStyle();

}());

/*
The next tutorial shows a variation of this idea. Choose the way that you find to be more natural.
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

