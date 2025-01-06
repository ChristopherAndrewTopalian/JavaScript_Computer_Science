javascript:(
/* Solar_Wind_Speed.js
*/
function()
{
    function getSolarWindSpeed()
    {
        let solarWindSpeed = document.querySelector("#WindSpeed").textContent;

        return solarWindSpeed;
    }

    function showData()
    {
        let solarWindSpeed = "Solar Wind Speed: " + getSolarWindSpeed() + " km/second";

        console.log(solarWindSpeed);
        alert(solarWindSpeed);
    }

    showData();

}());

/* Solar Wind Speed - https://www.swpc.noaa.gov/ */

/*
Solar Wind Speed: 354 km/second

When we go to https://www.swpc.noaa.gov and right click on the Solar Wind Speed and choose Inspect, we find out many things about the element, including the id, which we use in this script to get the textContent of that id.
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

