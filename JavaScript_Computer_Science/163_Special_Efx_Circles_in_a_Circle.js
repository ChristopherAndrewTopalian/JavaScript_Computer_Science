javascript:(
/* Special_Efx_Circles_in_a_Circle.js */
function()
{
    function makeClickableSpecialEfx()
    {
        let specialEfxBox = document.createElement('div');
        specialEfxBox.style.position = 'absolute';
        specialEfxBox.style.left = '50%';
        specialEfxBox.style.top = '50%';
        specialEfxBox.style.transform = 'translate(-50%, -50%)';
        specialEfxBox.style.width = '50px';
        specialEfxBox.style.height = '50px';
        specialEfxBox.style.backgroundColor = 'blue';
        /* make it a circle */
        specialEfxBox.style.borderRadius = '50%';
        specialEfxBox.style.cursor = 'pointer';

        specialEfxBox.onclick = function()
        {
            let particles = [];
            let amount = 500;

            for (let angle = 0; angle < 360; angle += 360 / amount)
            {
                let particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = '50px';
                particle.style.height = '50px';
                /* make it a circle */
                particle.style.borderRadius = '50%';
                particle.style.backgroundColor = getRandomColor();
                particle.style.animation = 'explode 1s ease-in-out';

                let radius = 200;

                let x = Math.cos((angle * Math.PI) / 180) * radius;

                let y = Math.sin((angle * Math.PI) / 180) * radius;

                particle.style.left = 'calc(50% + ' + x + 'px)';

                particle.style.top = 'calc(50% + ' + y + 'px)';

                /*-*/

                particles.push(particle);

                document.body.append(particle);
            }

            /* hide the original div */
            specialEfxBox.style.display = 'none';

            setTimeout(function()
            {
                for (let i = 0; i < particles.length; i++)
                {
                    /* remove particles after animation */
                    particles[i].remove();
                }
            }, 500);
        };

        document.body.append(specialEfxBox);

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
    }

    function getRandomColor()
    {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        return 'rgb('+r+', '+g+', '+b+')';
    }

    makeClickableSpecialEfx();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

