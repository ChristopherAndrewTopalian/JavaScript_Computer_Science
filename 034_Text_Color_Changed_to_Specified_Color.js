javascript:(
/* Text_Color_Changed_to_Specified_Color.js */
function()
{
    function textColorChange(whichColor)
    {
        let ourStyle = document.createElement("style");

        ourStyle.textContent = "body * { color: " + whichColor + " !important; }";

        document.head.append(ourStyle);
    }

    textColorChange("aqua");

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

