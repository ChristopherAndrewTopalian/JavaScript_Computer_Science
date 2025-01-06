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
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = 'aqua';

            /* apply animation */
            particle.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
            particle.style.opacity = 1;
            particle.style.transform = 'scale(1)';

            /* start particles from center */
            let radius = 0;

            let x = Math.cos((angle * Math.PI) / 180) * radius;
            let y = Math.sin((angle * Math.PI) / 180) * radius;

            particle.style.left = 'calc(50% + ' + x + 'px)';
            particle.style.top = 'calc(50% + ' + y + 'px)';

            particles.push({
                element: particle,
                dx: x,
                dy: y,
                radius: radius
            });

            document.body.append(particle);
        }

        /* set animation on particles after they are created */
        setTimeout(function()
        {
            for (let i = 0; i < particles.length; i++)
            {
                let particleObj = particles[i];

                if (particleObj && particleObj.element)
                {
                    let particle = particleObj.element;

                    /* animate particles by increasing their radius and fading them out */
                    particle.style.opacity = 0;
                    particle.style.transform = 'scale(5)';
                }
            }
        }, 10); /* small delay before starting animation */

        /* remove particles after the animation finishes */
        setTimeout(function()
        {
            for (let i = 0; i < particles.length; i++)
            {
                if (particles[i] && particles[i].element)
                {
                    particles[i].element.remove();
                }
            }
        }, 1000); /* match the animation duration*/
    }

    makeSpecialEfx();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

