javascript:(
/* Trigonometry_Spinning_Circle_of_Divs.js */
function()
{
    function generateCircleOfMovingDivs()
    {
        /* number of divs to create */
        let numberOfDivs = 36;

        /* radius of the circle */
        let radius = 50;

        /* center position */
        let centerX = 100;
        let centerY = 100;

        let container = document.createElement("div");
        container.style.position = "fixed";
        container.style.left = "20px";
        container.style.top = "20px";
        container.style.width = "200px";
        container.style.height = "200px";
        document.body.append(container);

        for (let x = 0; x < numberOfDivs; x++)
        {
            let angle = (x / numberOfDivs) * 2 * Math.PI;

            let xPos = centerX + radius * Math.cos(angle);

            let yPos = centerY + radius * Math.sin(angle);

            let div = document.createElement("div");
            div.style.position = "absolute";
            div.style.left = xPos + "px";
            div.style.top = yPos + "px";
            div.style.width = "10px";
            div.style.height = "10px";
            div.style.background = "blue";
            div.style.borderRadius = "50%";
            container.append(div);

            /* animate the divs */
            setInterval(function()
            {
                let rotateAngle = (x / numberOfDivs) * 2 * Math.PI + (new Date().getTime() / 1000);

                xPos = centerX + radius * Math.cos(rotateAngle);

                yPos = centerY + radius * Math.sin(rotateAngle);

                div.style.left = xPos + "px";

                div.style.top = yPos + "px";

            }, 50);
        }
    }

    generateCircleOfMovingDivs();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

