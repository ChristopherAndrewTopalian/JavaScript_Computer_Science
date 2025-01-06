javascript:(
/* createElement_Video_Play_Pause_Buttons.js */
function()
{
    function createPausePlayButtons()
    {
        let playButton = document.createElement("button");
        playButton.id = "playButton";
        playButton.style.position = "absolute";
        playButton.style.left = 100 + "px";
        playButton.style.top = 100 + "px";
        playButton.style.paddingLeft = 10 + "px";
        playButton.style.paddingRight = 10 + "px";
        playButton.style.paddingTop = 5 + "px";
        playButton.style.paddingBottom = 5 + "px";
        playButton.style.borderRadius = 8 + "px";
        playButton.style.zIndex = 1000;
        playButton.style.background = "rgb(0, 0, 0)";
        playButton.style.fontSize = 20 + "px";
        playButton.style.fontWeight = "bold";
        playButton.style.color = "rgb(255, 255, 255)";
        playButton.innerHTML = "Play Button";

        playButton.onmouseover = function()
        {
            playButton.style.color = "rgb(0, 255, 255)";
        };

        playButton.onmouseout = function()
        {
            playButton.style.color = "rgb(255, 255, 255)";
        };

        playButton.onclick = function()
        {
            let theVideo = document.querySelectorAll("video");

            theVideo.play();
        };

        document.body.append(playButton);

        /*-*/

        let pauseButton = document.createElement("button");
        pauseButton.id = "pauseButton";
        pauseButton.style.position = "absolute";
        pauseButton.style.left = 100 + "px";
        pauseButton.style.top = 150 + "px";
        pauseButton.style.paddingLeft = 10 + "px";
        pauseButton.style.paddingRight = 10 + "px";
        pauseButton.style.paddingTop = 5 + "px";
        pauseButton.style.paddingBottom = 5 + "px";
        pauseButton.style.borderRadius = 8 + "px";
        pauseButton.style.zIndex = 1000;
        pauseButton.style.background = "rgb(0, 0, 0)";
        pauseButton.style.fontSize = 20 + "px";
        pauseButton.style.fontWeight = "bold";
        pauseButton.style.color = "rgb(255, 255, 255)";
        pauseButton.innerHTML = "Pause Button";

        pauseButton.onmouseover = function()
        {
            pauseButton.style.color = "rgb(0, 255, 255)";
        };

        pauseButton.onmouseout = function()
        {
            pauseButton.style.color = "rgb(255, 255, 255)";
        };

        pauseButton.onclick = function()
        {
            let theVideo = document.querySelectorAll("video");

            theVideo.pause();
        };

        document.body.append(pauseButton);
    }

    createPausePlayButtons();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

