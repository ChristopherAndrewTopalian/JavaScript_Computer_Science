javascript:(
/* Style_All_Elements_of_Specified_Type.js */
function()
{
    function styleElement(whichElementType)
    {
        let elements = document.getElementsByTagName(whichElementType);

        for (let x = 0; x < elements.length; x++)
        {
            elements[x].style.borderStyle = "solid";

            elements[x].style.borderWidth = 1 + "px";

            elements[x].style.borderRadius = 8 + "px";

            elements[x].style.borderColor = "rgb(0, 255, 255)";

            elements[x].style.fontSize = 20 + "px";

            elements[x].style.fontWeight = "bold";
        }
    }

    styleElement("div");

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

