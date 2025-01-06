javascript:(
/* Special_Efx_when_clicked_div_turns_to_particles.js */
function()
{
    function makeClickableSpecialEfx()
    {
        let specialEfxBox = document.createElement('div');
        specialEfxBox.style.position = 'absolute';
        specialEfxBox.style.left = "100px";
        specialEfxBox.style.top = "50px";
        specialEfxBox.style.width = '50px';
        specialEfxBox.style.height = '50px';
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
                particle.style.width = '5px';
                particle.style.height = '5px';
                particle.style.backgroundColor = 'aqua';

                /* create explode animation */
                particle.style.transition = 'transform 1s ease-in-out, opacity 1s ease-in-out';
                particle.style.opacity = '1';

                /* random positions */
                let randomX = Math.random() * 200 - 100;
                let randomY = Math.random() * 200 - 100;

                particle.style.left = specialEfxBox.getBoundingClientRect().left + randomX + 'px';
                particle.style.top = specialEfxBox.getBoundingClientRect().top + randomY + 'px';

                /* apply particle animation */
                setTimeout(function()
                {
                    /* particle.style.transform = `translate(${randomX}px, ${randomY}px) scale(2)`; */

                    particle.style.transform = 'translate(' + randomX + 'px, ' + randomY + 'px) scale(2)';

                    particle.style.opacity = '0';
                }, 0);

                particles.push(particle);
                document.body.append(particle);
            }

            /* hide the original div */
            specialEfxBox.style.display = 'none';

            /* remove particles after animation */
            setTimeout(function()
            {
                for (let i = 0; i < particles.length; i++)
                {
                    particles[i].remove();
                }
            }, 1000);
        };

        document.body.append(specialEfxBox);
    }

    makeClickableSpecialEfx();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */


