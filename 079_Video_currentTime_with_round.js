javascript:(
/* Video_currentTime_with_round.js */
function()
{
    function videoCurrentTime()
    {
        let time = document.querySelector('video').currentTime;

        let roundedTime = Math.round(time);

        return roundedTime;
    }

    console.log(videoCurrentTime());

    alert(videoCurrentTime());

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

