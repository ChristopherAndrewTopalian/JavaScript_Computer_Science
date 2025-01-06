javascript:(
/* Special_Efx_Circles_in_a_Circle.js */
function()
{
    function makeClickableSpecialEfx()
    {
        let specialEfxBox = createSpecialEfxBox();

        document.body.append(specialEfxBox);

        specialEfxBox.onclick = function()
        {
            let particles = createParticlesInCircle(specialEfxBox, 500);

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
        specialEfxBox.style.left = '50%';
        specialEfxBox.style.top = '50%';
        specialEfxBox.style.transform = 'translate(-50%, -50%)';
        specialEfxBox.style.width = '50px';
        specialEfxBox.style.height = '50px';
        specialEfxBox.style.backgroundColor = 'blue';
        specialEfxBox.style.borderRadius = '50%';
        specialEfxBox.style.cursor = 'pointer';
        return specialEfxBox;
    }

    function createParticlesInCircle(specialEfxBox, amount)
    {
        let particles = [];
        let radius = 200;

        for (let angle = 0; angle < 360; angle += 360 / amount)
        {
            let particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '50px';
            particle.style.height = '50px';
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = getRandomColor();

            let x = Math.cos((angle * Math.PI) / 180) * radius;
            let y = Math.sin((angle * Math.PI) / 180) * radius;

            particle.style.left = `calc(50% + ${x}px)`;
            particle.style.top = `calc(50% + ${y}px)`;

            /* apply animation */
            particle.style.animation = 'explode 1s ease-in-out';

            particles.push({
                element: particle,
                dx: x,
                dy: y
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

                /* check if particle exists before animating */
                if (particleObj && particleObj.element)
                {
                    let particle = particleObj.element;

                    if (progress < 1)
                    {
                        let translateX = particleObj.dx * progress;
                        let translateY = particleObj.dy * progress;
                        let scale = 1 + 4 * progress;
                        let opacity = 1 - progress;

                        particle.style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px) scale(' + scale + ')';
                        particle.style.opacity = opacity;
                    }
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

        return `rgb(${r}, ${g}, ${b})`;
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

