javascript:(
/* Timer_Every_1_Second_Count_Down_clearInterval.js */
function()
{
    let counter = prompt("Enter Count Down Start Time");

    function countDown()
    {
        counter -= 1;

        if (counter == 0)
        {
            clearInterval(ourTimer);
        }

        return counter;
    }

    function createCounterDiv()
    {
        let ourDiv = document.createElement("div");
        ourDiv.id = "theDiv";
        ourDiv.style.position = "absolute";
        ourDiv.style.left = 100 + "px";
        ourDiv.style.top = 100 + "px";
        ourDiv.style.padding = 10 + "px";
        ourDiv.style.borderRadius = 8 + "px";
        ourDiv.style.backgroundColor = "rgb(0, 0, 0)";
        ourDiv.style.fontSize = 25 + "px";
        ourDiv.style.fontWeight = "bold";
        ourDiv.style.color = "rgb(255, 255, 255)";
        ourDiv.innerHTML = countDown();
        document.body.append(ourDiv);
    }

    let ourTimer = setInterval(createCounterDiv, 1000);

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

