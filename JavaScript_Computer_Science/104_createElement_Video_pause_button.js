javascript:(
/* createElement_Video_pause_button.js */
function()
{
    function videoPause()
    {
        let ourButton = document.createElement("button");
        ourButton.id = "theButton";
        ourButton.style.position = "absolute";
        ourButton.style.left = "100px";
        ourButton.style.top = "100px";
        ourButton.style.paddingLeft = 10 + "px";
        ourButton.style.paddingRight = 10 + "px";
        ourButton.style.paddingTop = 5 + "px";
        ourButton.style.paddingBottom = 5 + "px";
        ourButton.style.borderRadius = 8 + "px";
        ourButton.style.zIndex = "1000";
        ourButton.style.background = "rgb(0, 0, 0)";
        ourButton.style.fontSize = 20 + "px";
        ourButton.style.fontWeight = "bold";
        ourButton.style.color = "rgb(255, 255, 255)";
        ourButton.innerHTML = "Pause Button";

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
            let theVideo = document.querySelectorAll("video")[0];

            theVideo.pause();
        };

        document.body.append(ourButton);
    }

    videoPause();

}());

/* When we have a video playing in our browser we can pause it using this button. */

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

