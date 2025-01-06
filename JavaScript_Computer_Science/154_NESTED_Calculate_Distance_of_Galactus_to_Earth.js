javascript:(
/* Calculate_Distance_of_Galactus_to_Earth.js */
function()
{
    function calculateGalactusDistanceToEarth()
    {
        /* start distance of Galactus to Earth */
        let distance = 1000000; /* miles */

        /* how fast Galactus is traveling */
        let speed = 10000; /* mph */

        /* how often to update the distance */
        let updateTime = 1 * 1000;

        function updateDistance()
        {
            /* update distance */
            distance -= speed / 60;

            if (distance <= 0)
            {
                document.getElementById("galactus-update").innerHTML = "Galactus has arrived!";

                clearInterval(interval);
            }
            else
            {
                document.getElementById("galactus-update").innerHTML = "Galactus is " + distance.toFixed(2) + " miles away.";
            }
        }

        /* create a div element for the updates */
        let updateDiv = document.createElement("div");
        updateDiv.id = "galactus-update";
        updateDiv.style.position = "fixed";
        updateDiv.style.right = "10px";
        updateDiv.style.bottom = "10px";
        updateDiv.style.padding = "10px";
        updateDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        updateDiv.style.color = "white";
        updateDiv.style.fontFamily = "Arial";
        updateDiv.style.fontSize = "16px";
        updateDiv.style.zIndex = "10000";
        document.body.append(updateDiv);

        /* update the distance initially */
        updateDistance();

        /* timer to update the distance */
        let interval = setInterval(updateDistance, updateTime);
    }

    calculateGalactusDistanceToEarth();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

