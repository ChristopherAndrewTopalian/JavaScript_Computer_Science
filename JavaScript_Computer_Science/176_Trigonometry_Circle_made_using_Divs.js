javascript:(
/* Trigonometry_Circle_made_using_Divs.js */
function()
{
    function generateCircleOfDivs()
    {
        /* number of divs to create */
        let numberOfDivs = 360;

        /* the radius of the circle */
        let radius = 50;

        /* x pos of the circle's center */
        let centerX = 100;

        /* y pos of the circle's center */
        let centerY = 100;

        let container = document.createElement("div");
        container.style.width = "200px";
        container.style.height = "200px";
        container.style.position = "fixed";
        container.style.left = 100 + "px";
        container.style.top = 100 + "px";
        container.style.border = "1px solid black";
        document.body.append(container);

        for (let x = 0; x < numberOfDivs; x++)
        {
            let angle = (x / numberOfDivs) * 2 * Math.PI;

            let xPos = centerX + radius * Math.cos(angle);

            let yPos = centerY + radius * Math.sin(angle);

            /*-*/

            let div = document.createElement("div");
            div.style.width = "10px";
            div.style.height = "10px";
            div.style.background = "blue";
            div.style.borderRadius = "50%";
            div.style.position = "absolute";
            div.style.left = xPos + "px";
            div.style.top = yPos + "px";
            container.append(div);
        }
    }

    generateCircleOfDivs();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

