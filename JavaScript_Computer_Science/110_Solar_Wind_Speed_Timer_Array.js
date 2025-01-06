javascript:(
/* Solar_Wind_Speed_Timer_Array.js
*/
function()
{
    let solarWindArray = [];

    function getSolarWindSpeed()
    {
        let solarWindSpeed = document.querySelector("#WindSpeed").textContent;

        let date = new Date();

        let dateLocal = date.toLocaleString();

        return dateLocal + " - Solar Wind Speed: " + solarWindSpeed + " km/second";
    }

    /* push data into the array */
    solarWindArray.push(getSolarWindSpeed());

    console.log(JSON.stringify(solarWindArray));

    let theTimer = setInterval(function()
    {
        /* push data into the array on each iteration */
        solarWindArray.push(getSolarWindSpeed());

        console.log(JSON.stringify(solarWindArray));

    }, 60 * 1000);

}());

/* Solar Wind Speed - https://www.swpc.noaa.gov - Timer - Array */

/*
When activated on https://www.swpc.noaa.gov this script will get the Solar Wind Speed every 1 minute and add the solar wind speed to the array, in addition to the date and time.

The first time that the script gathers the solar wind speed it looks like this:
["8/28/2023, 6:54:56 AM - Solar Wind Speed: 327 km/second"]

The second time that the script gathers the solar wind speed it looks like this:
["8/28/2023, 6:54:17 AM - Solar Wind Speed: 327 km/second","8/28/2023, 6:55:17 AM - Solar Wind Speed: 325 km/second"]
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

