javascript:(
/* Make_Roads_like_in_Cities_Skylines.js */
function()
{
    function makeRoad()
    {
        let road = document.createElement("div");
        road.style.position = "absolute";
        road.style.backgroundColor = "gray";
        road.style.height = "20px";
        road.style.width = "5px";
        road.style.pointerEvents = "none";
        document.body.append(road);

        let isDrawing = false;

        document.addEventListener("mousedown", function(e)
        {
            isDrawing = true;
            road.style.left = e.pageX + "px";
            road.style.top = e.pageY + "px";
        });

        document.addEventListener("mouseup", function()
        {
            isDrawing = false;
        });

        document.addEventListener("mousemove", function(e)
        {
            if (isDrawing)
            {
                let currentX = e.pageX;
                let currentY = e.pageY;

                let deltaX = currentX - parseInt(road.style.left);

                let deltaY = currentY - parseInt(road.style.top);

                let length = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

                let angle = Math.atan2(deltaY, deltaX);

                road.style.width = length + "px";

                road.style.transform = "rotate(" + angle + "rad)";
            }
        });
    }

    makeRoad();

}());

/* After we have activated this bookmarklet, we hold left click and drag our mouse to make the road, and then let go of the left click to place the road at that angle.
Now at anytime that we want we can left click to place that angled road piece anywhere on the screen. */

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

