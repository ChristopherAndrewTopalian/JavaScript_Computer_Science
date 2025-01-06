javascript:(
/* First_Click_do_X_Second_Click_do_Y_Third_Click_do_Z.js */
function()
{
    let state = 0;

    function toggleFontWeightAndColor(element)
    {
        if (state === 0)
        {
            element.style.fontWeight = "normal";

            element.style.color = "red";

            state = 1;
        }

        else if (state === 1)
        {
            element.style.fontWeight = "bold";
            element.style.color = "green";
            state = 2;
        }

        else
        {
            element.style.color = "blue";
            state = 0;
        }
    }

    function mouseTriggersStyle()
    {
        document.onclick = function()
        {
            let elements = document.getElementsByTagName('*');

            for (let x = 0; x < elements.length; x++)
            {
                toggleFontWeightAndColor(elements[x]);
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

