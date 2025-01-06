javascript:(
/* Bouncing_Ball_Linear_Bounces_Up_Down_No_Trig.js */
function()
{
    function createBallWithMotion()
    {
        let ball = document.createElement('div');
        ball.id = 'ball';
        ball.style.position = "absolute";
        ball.style.width = "50px";
        ball.style.height = "50px";
        ball.style.borderRadius = "50%";
        ball.style.margin = "0px";
        ball.style.overflow = "hidden";
        ball.style.backgroundColor = "aqua";
        document.body.append(ball);

        /* 1 goes down, -1 goes up */
        let direction = 1;

        let position = 0;

        let speed = 2;

        function animate()
        {
            position += direction * speed;

            ball.style.top = position + 'px';

            if (position >= (window.innerHeight - 50) || position <= 0)
            {
                /* reverse direction at top or bottom */
                direction *= -1;
            }
        }

        let animationFrameId001;

        function gameLoop()
        {
            animate();

            animationFrameId001 = requestAnimationFrame(gameLoop);
        }

        gameLoop();
    }

    createBallWithMotion();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

