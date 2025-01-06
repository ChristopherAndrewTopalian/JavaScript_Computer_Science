javascript:(
/* Solar_Wind_Speed_Timer_AOO.js
*/
function()
{
    let solarWindArray = [];

    function getSolarWindSpeed()
    {
        let solarWindSpeed = document.querySelector("#WindSpeed").textContent;

        let date = new Date();

        let dateLocal = date.toLocaleString();

        return {
            date: dateLocal,
            speed: solarWindSpeed
        };
    }

    /* push data into the array */
    solarWindArray.push(getSolarWindSpeed());

    console.log(JSON.stringify(solarWindArray));

    let theTimer = setInterval(function()
    {
        /* push data into array on each iteration */
        solarWindArray.push(getSolarWindSpeed());
   
        console.log(JSON.stringify(solarWindArray));
    }, 60 * 1000);

}());

/* Solar Wind Speed - https://www.swpc.noaa.gov - Timer - Array of Objects -*/

/* When activated on https://www.swpc.noaa.gov script gets solar wind speed every 1 minute and add the solar wind speed to the array of objects, in addition to the date and time.

first time script gathers solar wind speed
[{"date":"8/28/2023, 7:15:49 AM","speed":"323"}]

second time script gathers solar wind speed
[{"date":"8/28/2023, 7:15:49 AM","speed":"323"},{"date":"8/28/2023, 7:16:49 AM","speed":"325"}]

third time script gathers solar wind speed
[{"date":"8/28/2023, 7:15:49 AM","speed":"323"},{"date":"8/28/2023, 7:16:49 AM","speed":"325"},{"date":"8/28/2023, 7:17:49 AM","speed":"324"}]

fourth time script gathers solar wind speed
[{"date":"8/28/2023, 7:15:49 AM","speed":"323"},{"date":"8/28/2023, 7:16:49 AM","speed":"325"},{"date":"8/28/2023, 7:17:49 AM","speed":"324"},{"date":"8/28/2023, 7:18:49 AM","speed":"323"}]
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

