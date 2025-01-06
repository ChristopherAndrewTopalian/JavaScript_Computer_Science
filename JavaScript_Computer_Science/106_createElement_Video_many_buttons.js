javascript:(
/* createElement_Video_many_buttons.js */
function()
{
    function createVideoControls()
    {
        let thePaddingLeft = 10;
        let thePaddingRight = 10;
        let thePaddingTop = 5;
        let thePaddingBottom = 5;
        let theMargin = 1;
        let theBorderRadius = 8;
        let theZIndex = 1000;
        let theFontSize = 16;
        let theTextColor = "rgb(255, 255, 255)";
        let theBackgroundColor = "rgba(0, 0, 0, 0.3)";
        let theBorderColor = "rgba(255, 255, 255, 0.3)";
        let theFontWeight = "bold";

        /*-*/

        let mainDiv = document.createElement("div");
        mainDiv.style.position = "absolute";
        mainDiv.style.left = 5 + "px";
        mainDiv.style.top = 70 + "px";
        mainDiv.style.display = "flex";
        mainDiv.style.flexDirection = "column";
        document.body.append(mainDiv);

        /*-*/

        let playButton = document.createElement("button");
        playButton.id = "playButton";
        playButton.style.paddingLeft = thePaddingLeft + "px";
        playButton.style.paddingRight = thePaddingRight + "px";
        playButton.style.paddingTop = thePaddingTop + "px";
        playButton.style.paddingBottom = thePaddingBottom + "px";
        playButton.style.margin = theMargin + "px";
        playButton.style.borderRadius = theBorderRadius + "px";
        playButton.style.borderColor = theBorderColor;
        playButton.style.zIndex = theZIndex;
        playButton.style.background = theBackgroundColor;
        playButton.style.fontSize = theFontSize + "px";
        playButton.style.fontWeight = theFontWeight;
        playButton.style.color = theTextColor;
        playButton.innerHTML = "Play";

        playButton.onmouseover = function()
        {
            playButton.style.color = "rgb(0, 255, 255)";
        };

        playButton.onmouseout = function()
        {
            playButton.style.color = theTextColor;
        };

        playButton.onclick = function()
        {
            let theVideo = document.querySelector("video");

            theVideo.play();
        };

        mainDiv.append(playButton);

        /*-*/

        let pauseButton = document.createElement("button");
        pauseButton.id = "pauseButton";
        pauseButton.style.paddingLeft = thePaddingLeft + "px";
        pauseButton.style.paddingRight = thePaddingRight + "px";
        pauseButton.style.paddingTop = thePaddingTop + "px";
        pauseButton.style.paddingBottom = thePaddingBottom + "px";
        pauseButton.style.margin = theMargin + "px";
        pauseButton.style.borderRadius = theBorderRadius + "px";
        pauseButton.style.borderColor = theBorderColor;
        pauseButton.style.zIndex = theZIndex;
        pauseButton.style.background = theBackgroundColor;
        pauseButton.style.fontSize = theFontSize + "px";
        pauseButton.style.fontWeight = theFontWeight;
        pauseButton.style.color = theTextColor;
        pauseButton.innerHTML = "Pause";

        pauseButton.onmouseover = function()
        {
            pauseButton.style.color = "rgb(0, 255, 255)";
        };

        pauseButton.onmouseout = function()
        {
            pauseButton.style.color = theTextColor;
        };

        pauseButton.onclick = function()
        {
            let theVideo = document.querySelector("video");

            theVideo.pause();
        };

        mainDiv.append(pauseButton);

        /*-*/

        let backButton = document.createElement("button");
        backButton.id = "backButton";
        backButton.style.paddingLeft = thePaddingLeft + "px";
        backButton.style.paddingRight = thePaddingRight + "px";
        backButton.style.paddingTop = thePaddingTop + "px";
        backButton.style.paddingBottom = thePaddingBottom + "px";
        backButton.style.margin = theMargin + "px";
        backButton.style.borderRadius = theBorderRadius + "px";
        backButton.style.borderColor = theBorderColor;
        backButton.style.zIndex = theZIndex;
        backButton.style.background = theBackgroundColor;
        backButton.style.fontSize = theFontSize + "px";
        backButton.style.fontWeight = theFontWeight;
        backButton.style.color = theTextColor;
        backButton.innerHTML = "Back";

        backButton.onmouseover = function()
        {
            backButton.style.color = "rgb(0, 255, 255)";
        };

        backButton.onmouseout = function()
        {
            backButton.style.color = theTextColor;
        };

        backButton.onclick = function()
        {
            let theVideo = document.querySelector("video");

            theVideo.currentTime += -2;
        };

        mainDiv.append(backButton);

        /*-*/

        let forwardButton = document.createElement("button");
        forwardButton.id = "forwardButton";
        forwardButton.style.paddingLeft = thePaddingLeft + "px";
        forwardButton.style.paddingRight = thePaddingRight + "px";
        forwardButton.style.paddingTop = thePaddingTop + "px";
        forwardButton.style.paddingBottom = thePaddingBottom + "px";
        forwardButton.style.margin = theMargin + "px";
        forwardButton.style.borderRadius = theBorderRadius + "px";
        forwardButton.style.borderColor = theBorderColor;
        forwardButton.style.zIndex = theZIndex;
        forwardButton.style.background = theBackgroundColor;
        forwardButton.style.fontSize = theFontSize + "px";
        forwardButton.style.fontWeight = theFontWeight;
        forwardButton.style.color = theTextColor;
        forwardButton.innerHTML = "Forward";

        forwardButton.onmouseover = function()
        {
            forwardButton.style.color = "rgb(0, 255, 255)";
        };

        forwardButton.onmouseout = function()
        {
            forwardButton.style.color = theTextColor;
        };

        forwardButton.onclick = function()
        {
            let theVideo = document.querySelector("video")[0];

            theVideo.currentTime += 2;
        };

        mainDiv.append(forwardButton);

        /*-*/

        let speedButton = document.createElement("button");
        speedButton.id = "speedButton";
        speedButton.style.paddingLeft = thePaddingLeft + "px";
        speedButton.style.paddingRight = thePaddingRight + "px";
        speedButton.style.paddingTop = thePaddingTop + "px";
        speedButton.style.paddingBottom = thePaddingBottom + "px";
        speedButton.style.margin = theMargin + "px";
        speedButton.style.borderRadius = theBorderRadius + "px";
        speedButton.style.borderColor = theBorderColor;
        speedButton.style.zIndex = theZIndex;
        speedButton.style.background = theBackgroundColor;
        speedButton.style.fontSize = theFontSize + "px";
        speedButton.style.fontWeight = theFontWeight;
        speedButton.style.color = theTextColor;
        speedButton.innerHTML = "Speed";

        speedButton.onmouseover = function()
        {
            speedButton.style.color = "rgb(0, 255, 255)";
        };

        speedButton.onmouseout = function()
        {
            speedButton.style.color = theTextColor;
        };

        speedButton.onclick = function()
        {
            let video = document.querySelector("video");

            let speedInput = prompt("Enter speed", "");

            video.playbackRate = parseFloat(speedInput);
        };

        mainDiv.append(speedButton);

        /*-*/

        let muteButton = document.createElement("button");
        muteButton.id = "muteButton";
        muteButton.style.paddingLeft = thePaddingLeft + "px";
        muteButton.style.paddingRight = thePaddingRight + "px";
        muteButton.style.paddingTop = thePaddingTop + "px";
        muteButton.style.paddingBottom = thePaddingBottom + "px";
        muteButton.style.margin = theMargin + "px";
        muteButton.style.borderRadius = theBorderRadius + "px";
        muteButton.style.borderColor = theBorderColor;
        muteButton.style.zIndex = theZIndex;
        muteButton.style.background = theBackgroundColor;
        muteButton.style.fontSize = theFontSize + "px";
        muteButton.style.fontWeight = theFontWeight;
        muteButton.style.color = theTextColor;
        muteButton.innerHTML = "Mute";

        muteButton.onmouseover = function()
        {
            muteButton.style.color = "rgb(0, 255, 255)";
        };

        muteButton.onmouseout = function()
        {
            muteButton.style.color = theTextColor;
        };

        muteButton.onclick = function()
        {
           document.querySelector("video").muted = true;
        };

        mainDiv.append(muteButton);

        /*-*/

        let unmuteButton = document.createElement("button");
        unmuteButton.id = "unmuteButton";
        unmuteButton.style.paddingLeft = thePaddingLeft + "px";
        unmuteButton.style.paddingRight = thePaddingRight + "px";
        unmuteButton.style.paddingTop = thePaddingTop + "px";
        unmuteButton.style.paddingBottom = thePaddingBottom + "px";
        unmuteButton.style.margin = theMargin + "px";
        unmuteButton.style.borderRadius = theBorderRadius + "px";
        unmuteButton.style.borderColor = theBorderColor;
        unmuteButton.style.zIndex = theZIndex;
        unmuteButton.style.background = theBackgroundColor;
        unmuteButton.style.fontSize = theFontSize + "px";
        unmuteButton.style.fontWeight = theFontWeight;
        unmuteButton.style.color = theTextColor;
        unmuteButton.innerHTML = "Unmute";

        unmuteButton.onmouseover = function()
        {
            unmuteButton.style.color = "rgb(0, 255, 255)";
        };

        unmuteButton.onmouseout = function()
        {
            unmuteButton.style.color = theTextColor;
        };

        unmuteButton.onclick = function()
        {
            document.querySelector("video").muted = false;
        };

        mainDiv.append(unmuteButton);
    }

    createVideoControls();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

