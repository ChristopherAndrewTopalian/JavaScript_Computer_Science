javascript:(
/* First_Click_Does_X_Second_Click_Does_Y_Variation.js */
function()
{
    let toggleFlag = false;

    function mouseTriggersStyle()
    {
        document.onclick = function()
        {
            let elements = document.getElementsByTagName('*');

            for (let x = 0; x < elements.length; x++)
            {
                if (toggleFlag == false)
                {
                    elements[x].style.fontWeight = "normal";

                    toggleFlag = true;
                }
                else
                {
                    elements[x].style.fontWeight = "bold";

                    toggleFlag = false;
                }
            }
        };
    }

    mouseTriggersStyle();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

