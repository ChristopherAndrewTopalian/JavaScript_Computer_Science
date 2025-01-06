javascript:(
/* Special_Efx_Circles_Random_Color_and_Size.js */
function()
{
    function makeClickableSpecialEfx()
    {
        let specialEfxBox = document.createElement('div');
        specialEfxBox.style.position = 'absolute';
        specialEfxBox.style.left = '100px';
        specialEfxBox.style.top = '50px';
        specialEfxBox.style.width = '100px';
        specialEfxBox.style.height = '100px';
        specialEfxBox.style.backgroundColor = 'blue';
        specialEfxBox.style.cursor = 'pointer';

        specialEfxBox.onclick = function()
        {
            let particles = [];

            let amount = 500;

            for (let x = 0; x < amount; x++)
            {
                let particle = document.createElement('div');
                particle.style.position = 'absolute';

                /* get a random size for the circle */
                let size = getRandomSize();

                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                /* make it a circle */
                particle.style.borderRadius = '50%';
                particle.style.backgroundColor = getRandomColor();
                particle.style.animation = 'explode 1s ease-in-out';

                /* random X coordinate within a range */
                let randomX = Math.random() * 200 - 100;

                /* random Y coordinate within a range */
                let randomY = Math.random() * 200 - 100;
                particle.style.left = specialEfxBox.getBoundingClientRect().left + randomX + 'px';

                particle.style.top = specialEfxBox.getBoundingClientRect().top + randomY + 'px';

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

    function getRandomSize()
    {
        return Math.floor(Math.random() * 20) + 5;
    }

    makeClickableSpecialEfx();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

