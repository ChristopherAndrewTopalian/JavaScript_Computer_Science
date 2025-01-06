javascript:(
/* Video_Custom_Speed.js */
function()
{
    function videoSpeedSet()
    {
        let speedInput = prompt('Enter a Speed', '0.50');

        let videoSpeed = parseFloat(speedInput);

        document.querySelector('video').playbackRate = videoSpeed;
    }

    videoSpeedSet();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

