javascript:(
/* Airplane_Projectile_Realistic.js */
function()
{
    let airplane = document.createElement('div');
    airplane.id = "airplane";
    airplane.style.position = 'absolute';
    airplane.style.left = '-50px';
    airplane.style.top = '50px';
    airplane.style.width = '50px';
    airplane.style.height = '20px';
    airplane.style.backgroundColor = 'blue';
    airplane.style.transition = 'all 2s linear';
    document.body.append(airplane);

    /*-*/

    let projectile = document.createElement('div');
    projectile.id = "projectile";
    projectile.style.position = 'absolute';
    projectile.style.width = '15px';
    projectile.style.height = '15px';
    projectile.style.borderRadius = "50%";
    projectile.style.backgroundColor = 'aqua';
    /* initially hide the object */
    projectile.style.display = 'none';
    document.body.append(projectile);

    let flying = false;

    document.onclick = function(event)
    {
        if (!flying)
        {
            flying = true;

            let x = event.clientX + 15;
            let y = event.clientY;

            /* adjustment for airplane's center */
            let airplaneCenterAdjustment = airplane.offsetWidth / 2;

            /* set plane's starting position to left of viewport */
            airplane.style.left = -airplaneCenterAdjustment + 'px';

            /* set plane's final pos (where it was clicked)*/
            airplane.style.transform = 'translate(' + (x - airplaneCenterAdjustment) + 'px, 0)';

            /* set initial pos of the projectile at the bottom middle of the airplane */
            let airplaneRect = airplane.getBoundingClientRect();

            let projectileLeft = x - airplaneCenterAdjustment;

            /* place projectile at bottom of airplane */
            let projectileTop = airplaneRect.bottom;                  

            projectile.style.left = projectileLeft + 'px';
            projectile.style.top = projectileTop + 'px';

            /* calculate the distance to fall (from top to the user's click Y-coordinate) */
            let distanceToFall = y - projectileTop;

            /* set a timeout to start the object's descent and reveal it */
            setTimeout(function()
            {
                /* display object to make it visible */
                projectile.style.display = 'block';

                /* set the initial time and speed */
                let startTime = null;

                /* falling speed: higher values make it fall faster */
                let speed = 200;

                function animateProjectile(timestamp)
                {
                    if (!startTime)
                    {
                        startTime = timestamp;
                    }

                    /* calculate the elapsed time */
                    let elapsedTime = timestamp - startTime;

                    /* calculate the new top position based on the elapsed time and speed */
                    let newY = (elapsedTime / 1000) * speed;

                    if (newY < distanceToFall)
                    {
                        /* continue the animation */
                        requestAnimationFrame(animateProjectile);
                    }
                    else
                    {
                        /* finish the animation when it reaches the target Y coordinate */
                        newY = distanceToFall;
                    }

                    /* apply the new top position */
                    projectile.style.transform = 'translateY(' + newY + 'px)';
                }

                /* start the animation */
                requestAnimationFrame(animateProjectile);
            }, 2000);

            /* adjust the timeout delay based on the airplane's transition duration */
        }
    };

}());

/* Airplane - Projectile - Realistic - drops from bottom middle of airplane  */

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

