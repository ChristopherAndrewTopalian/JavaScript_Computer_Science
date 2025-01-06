javascript:(
/* Special_Efx_Circle_Expands.js */
function()
{
    function makeSpecialEfx()
    {
        let particles = [];

        let amount = 1000;

        for (let angle = 0; angle < 360; angle += 360 / amount)
        {
            let particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '50px';
            particle.style.height = '50px';
            particle.style.borderRadius = "50%";
            particle.style.backgroundColor = 'aqua';
            particle.style.animation = 'explode 1s ease-in-out';

            /* start particles from center */
            let radius = 0;

            /*-*/

            let x = Math.cos((angle * Math.PI) / 180) * radius;

            let y = Math.sin((angle * Math.PI) / 180) * radius;

            /*-*/

            particle.style.left = 'calc(50% + ' + x + 'px)';

            particle.style.top = 'calc(50% + ' + y + 'px)';

            /*-*/

            particles.push(particle);

            document.body.append(particle);
        }

        setTimeout(function()
        {
            for (let i = 0; i < particles.length; i++)
            {
                /* remove particles after animation */
                particles[i].remove();
            }
        }, 1000);
    }

    /*-*/

    let style001 = document.createElement('style');

    style001.innerHTML = `
        @keyframes explode {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(5);
        }
    }`;

    document.head.append(style001);

    makeSpecialEfx();

}());

/* 
The Circle expands with a smooth animation.
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

