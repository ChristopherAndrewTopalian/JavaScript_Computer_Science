javascript:(
/* Airplane_Projectile_Simulated_Drop_where_user_clicks.js */
function()
{
    let airplane = document.createElement('div');
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
    projectile.style.position = 'absolute';
    projectile.style.width = '15px';
    projectile.style.height = '15px';
    projectile.style.borderRadius = "50%";
    projectile.style.backgroundColor = 'aqua';
    projectile.style.transition = 'all 1s linear';
    projectile.style.display = 'none';
    document.body.append(projectile);

    let flying = false;

    document.onclick = function(event)
    {
        if (!flying)
        {
            flying = true;

            airplane.style.transform = 'translate(' + window.innerWidth + 'px, 0)';

            setTimeout(function()
            {
                let x = event.clientX;
                let y = event.clientY;

                projectile.style.left = x + 'px';
                projectile.style.top = '25px';

                projectile.style.display = 'block';

                /* projectile path */
                projectile.style.transform = 'translateY(' + (y - 25) + 'px)';
            }, 1000);
        }
    };

}());

/*
When a person left clicks their mouse on the screen an airplane will fly to the right and simulate dropping a projectile below, which will remain on the screen.
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

