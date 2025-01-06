javascript:(
/* Timer_Every_1_Second_Count_Up.js */
function()
{
    let counter = 0;

    function updateIt()
    {
        counter += 1;

        return counter;
    }

    function createCounterDiv()
    {
        let ourDiv = document.createElement("div");
        ourDiv.id = "theDiv";
        ourDiv.style.position = "absolute";
        ourDiv.style.left = 20 + "px";
        ourDiv.style.top = 150 + "px";
        ourDiv.style.width = 100 + "px";
        ourDiv.style.height = 25 + "px";
        ourDiv.style.padding = 10 + "px";
        ourDiv.style.backgroundColor = "rgb(0, 0, 0)";
        ourDiv.style.fontSize = 20 + "px";
        ourDiv.style.color = "rgb(255, 255, 255)";
        ourDiv.innerHTML = updateIt();
        document.body.append(ourDiv);
    }

    setInterval(createCounterDiv, 1000);

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

