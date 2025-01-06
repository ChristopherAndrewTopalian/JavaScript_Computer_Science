javascript:(
/* createElement_Make_Button.js */
function()
{
    function textMessage(whichText)
    {
        alert(whichText);
    }

    function createMessage(whichText)
    {
        let ourButton = document.createElement("button");
        ourButton.style.position = "absolute";
        ourButton.style.left = "100px";
        ourButton.style.top = "100px";
        ourButton.style.padding = "2px";
        ourButton.style.zIndex = "1000";
        ourButton.style.background = "rgb(0, 0, 0)";
        ourButton.style.fontSize = 22 + "px";
        ourButton.style.color = "rgb(255, 255, 255)";
        ourButton.innerHTML = "Greeting";

        ourButton.onmouseover = function()
        {
            ourButton.style.color = "rgb(0, 255, 255)";
        };

        ourButton.onmouseout = function()
        {
            ourButton.style.color = "rgb(255, 255, 255)";
        };

        ourButton.onclick = function()
        {
            textMessage(whichText);
        };

        document.body.append(ourButton);
    }

    createMessage("Hi Everyone");

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

