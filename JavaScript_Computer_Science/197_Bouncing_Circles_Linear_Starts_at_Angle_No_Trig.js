javascript:(
/* Bouncing_Circles_Linear_Starts_at_Angle_No_Trig.js */
function()
{
    let circles = [];

    let numberOfCircles = 10;

    function getRandomPosition()
    {
        let x = Math.floor(Math.random() * window.innerWidth);

        let y = Math.floor(Math.random() * window.innerHeight);

        return {
            x: x,
            y: y
        };
    }

    for (let x = 0; x < numberOfCircles; x++)
    {
        let circle = document.createElement('div');
        circle.style.position = 'absolute';
        circle.style.width = '20px';
        circle.style.height = '20px';
        circle.style.backgroundColor = 'none';
        circle.style.borderStyle = 'solid';
        circle.style.borderWidth = '1px';
        circle.style.borderRadius = '50%';
        circle.style.pointerEvents = 'none';

        let position = getRandomPosition();
        circle.style.left = position.x + 'px';
        circle.style.top = position.y + 'px';

        circle.dx = Math.random() * 4 - 2;
        circle.dy = Math.random() * 4 - 2;

        document.body.append(circle);

        circles.push(circle);
    }

    function animate()
    {
        for (let x = 0; x < circles.length; x++)
        {
            let circle = circles[x];

            circle.style.left = (parseInt(circle.style.left) + circle.dx) + 'px';

            circle.style.top = (parseInt(circle.style.top) + circle.dy) + 'px';

            if (parseInt(circle.style.left) <= 0 || parseInt(circle.style.left) >= window.innerWidth - 20)
            {
                circle.dx *= -1;
            }

            if (parseInt(circle.style.top) <= 0 || parseInt(circle.style.top) >= window.innerHeight - 20)
            {
                circle.dy *= -1;
            }
        }
    }

    let animationFrameId001;

    function gameLoop()
    {
        animate();

        animationFrameId001 = requestAnimationFrame(gameLoop);
    }

    gameLoop();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

