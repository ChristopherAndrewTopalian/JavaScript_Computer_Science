javascript:(
/* Random_BG_to_Specified_Elements_Variation.js */
function()
{
    function styleSpecifiedElements(whichElementType, whichRgbColor)
    {
        let theElements = document.getElementsByTagName(whichElementType);

        for (let x = 0; x < theElements.length; x++)
        {
            theElements[x].style.backgroundColor = whichRgbColor;
        }
    }

    styleSpecifiedElements("p", 'rgb(' +
    Math.floor(Math.random() * 255) + ',' +
    Math.floor(Math.random() * 255) + ',' +
    Math.floor(Math.random() * 255) + ')');

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

