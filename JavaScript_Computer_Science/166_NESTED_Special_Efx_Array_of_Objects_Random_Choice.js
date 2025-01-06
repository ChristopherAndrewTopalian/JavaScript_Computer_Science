javascript:(
/* Special_Efx_Array_of_Objects_Random_Choice.js */
function()
{
    function generateSpecialEffects()
    {
        let specialEfx =
        [
            {
                name: 'Effect 1',
                color: 'aqua',
                size: 50,
            },

            {
                name: 'Effect 2',
                color: 'yellow',
                size: 200,
            },

            {
                name: 'Effect 3',
                color: 'blue',
                size: 400,
            },
        ];

        function createRandomEfx()
        {
            let whichArray = specialEfx;

            let randomIndex = Math.floor(Math.random() * whichArray.length);

            let effectChosen = whichArray[randomIndex];

            /*-*/

            let particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = effectChosen.size + 'px';
            particle.style.height = effectChosen.size + 'px';
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = effectChosen.color;
            particle.style.animation = 'expandCircle 1s ease-in-out';

            /*-*/

            /* calculate position to center the circle */
            let leftPosition = (window.innerWidth - effectChosen.size) / 2;

            let topPosition = (window.innerHeight - effectChosen.size) / 2;

            /*-*/

            particle.style.left = leftPosition + 'px';
            particle.style.top = topPosition + 'px';

            /*-*/

            document.body.append(particle);

            setTimeout(function()
            {
                /* remove particle after animation */
                particle.remove();
            }, 700);
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

        /* create random efx at regular intervals */
        setInterval(function()
        {
            createRandomEfx(specialEfx);
        }, 2000);
    }

    generateSpecialEffects();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

