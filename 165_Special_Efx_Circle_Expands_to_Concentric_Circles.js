javascript:(
/* Special_Efx_Circle_Expands_to_Concentric_Circles.js */
function()
{
    function makeSpecialEfx()
    {
        let circles = [];

        /* number of concentric circles */
        let numCircles = 10;

        /* initial size of the innermost circle */
        let circleSize = 50;

        for (let i = 0; i < numCircles; i++)
        {
            let circle = document.createElement('div');
            circle.style.position = 'absolute';
            circle.style.width = circleSize + 'px';
            circle.style.height = circleSize + 'px';
            circle.style.borderRadius = '50%';
            circle.style.backgroundColor = 'aqua';
            circle.style.animation = 'expandCircle 1s ease-in-out';

            /*-*/

            /* calculate position to center circles */
            let leftPosition = (window.innerWidth - circleSize) / 2;

            let topPosition = (window.innerHeight - circleSize) / 2;

            /*-*/

            circle.style.left = leftPosition + 'px';
            circle.style.top = topPosition + 'px';

            /*-*/

            /* increase the circle size for the next concentric circle */
            circleSize += 50;

            circles.push(circle);

            document.body.append(circle);
        }

        setTimeout(function()
        {
            for (let i = 0; i < circles.length; i++)
            {
                /* remove circles after animation */
                circles[i].remove();
            }
        }, 1000);
    }

    /*-*/

    let style001 = document.createElement('style');

    style001.innerHTML = `
        @keyframes expandCircle {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(1.5);
        }
    }`;

    document.head.append(style001);

    makeSpecialEfx();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

