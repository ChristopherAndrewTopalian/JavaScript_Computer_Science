javascript:(
/* Timer_Every_5_Seconds_Trigger_function.js */
function()
{
    let counter = 0;

    function showCounterData()
    {
        console.log(counter);

        counter += 1;
    }

    setInterval(showCounterData, 5000);

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

