javascript:(
/* Text_Color_Changed_to_Aqua.js */
function()
{
    function textColorChange()
    {
        let ourStyle = document.createElement("style");

        ourStyle.textContent = "body * { color: aqua !important; }";

        document.head.append(ourStyle);
    }

    textColorChange();

}());

/* !important makes a CSS rule a higher specificity. It overrides any other style */

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

