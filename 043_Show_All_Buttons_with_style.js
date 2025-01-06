javascript:(
/* Show_All_Buttons_with_style.js */
function()
{
    function showButons()
    {
        let report = "";

        let buttons = document.getElementsByTagName("button");

        for (let x = 0; x < buttons.length; x++)
        {
            buttons[x].style.borderStyle = "solid";

            buttons[x].style.borderWidth = 2 + "px";

            buttons[x].style.borderColor = "rgb(0, 255, 255)";

            report += buttons[x].innerHTML;

            report += "\n";
        }

        console.log(report);

        alert(report);
    }

    showButons();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

