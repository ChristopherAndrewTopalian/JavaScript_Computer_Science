javascript:(
/* Trigonometry_Pulsating_Circle_of_Divs.js */
function()
{
    function circleOfDivsPulsating()
    {
        /* number of divs to create */
        let numberOfDivs = 60;

        /* radius of the circle */
        let radius = 50;

        /* center position */
        let centerX = 100;
        let centerY = 100;

        /* container for the circle */
        let container = document.createElement("div");
        container.style.position = "fixed";
        container.style.left = "100px";
        container.style.top = "100px";
        container.style.width = "200px";
        container.style.height = "200px";
        container.style.margin = "0 auto";
        container.style.overflow = "hidden";
        document.body.append(container);

        /* create the divs */
        for (let x = 0; x < numberOfDivs; x++)
        {
            let angle = (x / numberOfDivs) * 2 * Math.PI;

            let xPos = centerX + radius * Math.cos(angle);

            let yPos = centerY + radius * Math.sin(angle);

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

        /* animate the pulsating effect */
        let scale = 1;
        let growing = true;

        function animate()
        {
            if (growing)
            {
                scale += 0.01;

                if (scale >= 2)
                {
                    growing = false;
                }
            }
            else
            {
                scale -= 0.01;

                if (scale <= 0.5)
                {
                    growing = true;
                }
            }

            container.style.transform = 'scale('+scale+')';
        }

        setInterval(function()
        {
            animate();
        }, 10);
    }

    circleOfDivsPulsating();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

