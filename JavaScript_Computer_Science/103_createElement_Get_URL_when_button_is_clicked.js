javascript:(
/* createElement_Get_URL_when_button_is_clicked.js
*/
function()
{
    function showUrl()
    {
        let ourButton = document.createElement("button");
        ourButton.style.position = "fixed";
        ourButton.style.right = 5 + "px";
        ourButton.style.top = 5 + "px";
        ourButton.style.borderRadius = 8 + "px";
        ourButton.style.paddingLeft = 10 + "px";
        ourButton.style.paddingRight = 10 + "px";
        ourButton.style.paddingBottom = 5 + "px";
        ourButton.style.paddingTop = 5 + "px";
        ourButton.style.zIndex = "1000";
        ourButton.style.background = "rgb(0, 0, 0)";
        ourButton.style.fontSize = 20 + "px";
        ourButton.style.fontWeight = "bold";
        ourButton.style.color = "rgb(255, 255, 255)";

        ourButton.onclick = function()
        {
              console.log(window.location.href);
            alert(window.location.href);
        };

        ourButton.onmouseover = function()
        {
            ourButton.style.borderColor = "aqua";
            ourButton.style.color = "aqua";
        };

        ourButton.onmouseout = function()
        {
            ourButton.style.borderColor = "white";
            ourButton.style.color = "white";
        };

        ourButton.innerHTML = "Show URL";

        document.body.append(ourButton);
    }

    showUrl();

}());

/* createElement - Get URL when button is clicked, onmouseover, onmouseout */

/* onmouseover the button changes style, onmouseout the button changes style again.
onclick it shows the url of the page in a console message and alert message box */

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

