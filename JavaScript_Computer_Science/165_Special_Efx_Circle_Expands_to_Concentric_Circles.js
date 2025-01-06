javascript:(
/* Special_Efx_Circle_Expands_to_Concentric_Circles.js */
function()
{
    function makeSpecialEfx()
    {
        let circles = [];

        /* number of concentric circles */
        let numCircles = 10;

        /* initial size of innermost circle */
        let circleSize = 50;

        for (let i = 0; i < numCircles; i++)
        {
            let circle = document.createElement('div');
            circle.style.position = 'absolute';
            circle.style.width = circleSize + 'px';
            circle.style.height = circleSize + 'px';
            circle.style.borderRadius = '50%';
            circle.style.backgroundColor = 'aqua';

            /* apply transition */
            circle.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
            circle.style.opacity = 1;
            circle.style.transform = 'scale(1)';

            /* calculate position to center circles */
            let leftPosition = (window.innerWidth - circleSize) / 2;
            let topPosition = (window.innerHeight - circleSize) / 2;

            circle.style.left = leftPosition + 'px';
            circle.style.top = topPosition + 'px';

            /* increase the circle size for the next concentric circle */
            circleSize += 50;

            circles.push({
                element: circle,
                size: circleSize
            });

            document.body.append(circle);
        }

        /* set animation on circles after they are created */
        setTimeout(function()
        {
            for (let i = 0; i < circles.length; i++)
            {
                let circleObj = circles[i];

                if (circleObj && circleObj.element)
                {
                    let circle = circleObj.element;

                    /* animate the circles by scaling them up and fading out */
                    circle.style.opacity = 0;
                    circle.style.transform = 'scale(1.5)';
                }
            }
        }, 10); /* small delay before starting animation */

        /* remove circles after the animation finishes */
        setTimeout(function()
        {
            for (let i = 0; i < circles.length; i++)
            {
                if (circles[i] && circles[i].element)
                {
                    circles[i].element.remove();
                }
            }
        }, 1000); /* match the animation duration */
    }

    makeSpecialEfx();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

