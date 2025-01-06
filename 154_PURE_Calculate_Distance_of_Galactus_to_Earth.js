javascript:(
/* Calculate_Distance_of_Galactus_to_Earth.js */
function()
{
    function createUpdateDiv()
    {
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
        return updateDiv;
    }

    function calculateNewDistance(currentDistance, speed)
    {
        return currentDistance - (speed / 60);
    }

    function displayDistance(updateDiv, distance)
    {
        if (distance <= 0)
        {
            updateDiv.innerHTML = "Galactus has arrived!";
        }
        else
        {
            updateDiv.innerHTML = "Galactus is " + distance.toFixed(2) + " miles away.";
        }
    }

    function updateDistance(currentState)
    {
        let newDistance = calculateNewDistance(currentState.distance, currentState.speed);
        return {
            ...currentState,  /* keep other properties */
            distance: newDistance
        };
    }

    function startGalactusDistanceTracker()
    {
        let state = {
            distance: 1000000, /* miles */
            speed: 10000, /* mph */
            updateTime: 1 * 1000, /* update every second */
            updateDiv: createUpdateDiv()
        };

        function updateCycle()
        {
            state = updateDistance(state);
            /* get new state with updated distance */
            displayDistance(state.updateDiv, state.distance);

            if (state.distance <= 0)
            {
                clearInterval(interval);
            }
        }

        /* update the distance initially */
        updateCycle();

        /* set interval for regular updates */
        let interval = setInterval(updateCycle, state.updateTime);
    }

    /* start the tracker */
    startGalactusDistanceTracker();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

