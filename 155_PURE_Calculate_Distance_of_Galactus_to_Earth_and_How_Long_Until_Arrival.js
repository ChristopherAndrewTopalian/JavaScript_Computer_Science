javascript:(
/* Calculate_Distance_of_Galactus_to_Earth_and_How_Long_Until_Arrival.js */
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

    function calculateTimeRemaining(distance, speed)
    {
        let timeInHours = distance / speed;
        let hours = Math.floor(timeInHours);
        let minutes = Math.floor((timeInHours - hours) * 60);
        return { hours: hours, minutes: minutes };
    }

    function displayDistanceAndTime(updateDiv, distance, time)
    {
        if (distance <= 0)
        {
            updateDiv.innerHTML = "Galactus has arrived!";
        }
        else
        {
            updateDiv.innerHTML =
                "Galactus is " + distance.toFixed(2) + " miles away.<br>" +
                "Arrival in " + time.hours + " hours and " + time.minutes + " minutes.";
        }
    }

    function updateDistance(state)
    {
        let newDistance = calculateNewDistance(state.distance, state.speed);
        let time = calculateTimeRemaining(newDistance, state.speed);

        return {
            /* keep other properties */
            ...state,
            distance: newDistance,
            time: time
        };
    }

    function updateCycle(state)
    {
        /* get updated state with new distance */
        let newState = updateDistance(state);
        displayDistanceAndTime(newState.updateDiv, newState.distance, newState.time);

        /* check if galactus has arrived */
        if (newState.distance <= 0)
        {
            /* stop interval if arrived */
            clearInterval(newState.intervalId);
        }

        return newState;
    }

    function startGalactusDistanceTracker()
    {
        let state = {
            distance: 1000000,  /* miles */
            speed: 10000,  /* mph */
            updateTime: 1 * 1000,  /* update every second */
            updateDiv: createUpdateDiv(),
            time: { hours: 0, minutes: 0 },
            intervalId: null
        };

        /* start the interval */
        state.intervalId = setInterval(function()
        {
            /* update state on each cycle */
            state = updateCycle(state);
        }, state.updateTime);
    }

    /* start the tracker */
    startGalactusDistanceTracker();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

