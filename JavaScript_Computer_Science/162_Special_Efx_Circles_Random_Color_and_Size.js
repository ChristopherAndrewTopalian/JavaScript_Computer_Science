javascript:(
/* Special_Efx_Circles_Random_Color_and_Size.js */
function()
{
    function makeClickableSpecialEfx()
    {
        let specialEfxBox = createSpecialEfxBox();

        document.body.append(specialEfxBox);

        specialEfxBox.onclick = function()
        {
            let particles = createParticlesWithCircles(specialEfxBox, 500);

            /* hide the original div */
            hideSpecialEfxBox(specialEfxBox);

            /* animate particles */
            animateParticles(particles, 1000, function()
            {
                removeParticles(particles);
            });
        };
    }

    function createSpecialEfxBox()
    {
        let specialEfxBox = document.createElement('div');
        specialEfxBox.style.position = 'absolute';
        specialEfxBox.style.left = '100px';
        specialEfxBox.style.top = '50px';
        specialEfxBox.style.width = '100px';
        specialEfxBox.style.height = '100px';
        specialEfxBox.style.backgroundColor = 'blue';
        specialEfxBox.style.cursor = 'pointer';
        return specialEfxBox;
    }

    function createParticlesWithCircles(specialEfxBox, amount)
    {
        let particles = [];

        for (let x = 0; x < amount; x++)
        {
            let particle = document.createElement('div');
            particle.style.position = 'absolute';

            /* random size for the circle */
            let size = getRandomSize();

            particle.style.width = size + 'px';
            particle.style.height = size + 'px';

            /* make it a circle */
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = getRandomColor();

            /* random X and Y offsets */
            let randomX = Math.random() * 200 - 100;
            let randomY = Math.random() * 200 - 100;

            particle.style.left = specialEfxBox.getBoundingClientRect().left + 'px';
            particle.style.top = specialEfxBox.getBoundingClientRect().top + 'px';

            particles.push({
                element: particle,
                dx: randomX,
                dy: randomY,
                scale: 1,
                opacity: 1
            });

            document.body.append(particle);
        }

        return particles;
    }

    function animateParticles(particles, duration, onComplete)
    {
        let startTime = Date.now();

        function step()
        {
            let elapsedTime = Date.now() - startTime;
            let progress = elapsedTime / duration;

            for (let i = 0; i < particles.length; i++)
            {
                let particleObj = particles[i];

                if (progress < 1)
                {
                    let particle = particleObj.element;

                    let translateX = particleObj.dx * progress;
                    let translateY = particleObj.dy * progress;
                    let scale = 1 + 4 * progress;
                    let opacity = 1 - progress;

                    particle.style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px) scale(' + scale + ')';
                    particle.style.opacity = opacity;
                }
            }

            if (progress < 1)
            {
                requestAnimationFrame(step);
            }
            else
            {
                if (typeof onComplete === 'function')
                {
                    onComplete();
                }
            }
        }

        requestAnimationFrame(step);
    }

    function hideSpecialEfxBox(specialEfxBox)
    {
        specialEfxBox.style.display = 'none';
    }

    function removeParticles(particles)
    {
        for (let i = 0; i < particles.length; i++)
        {
            particles[i].element.remove();
        }
    }

    function getRandomColor()
    {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);

        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
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

