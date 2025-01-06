javascript:(
/* Bouncing_Ball_Linear_Starts_at_Angle_Trig.js */
function()
{
    function createBouncingBall()
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

        /* initial angle in degrees */
        let angle = 45; 
        let speed = 2;

        /* convert degrees to radians for Math.sin and Math.cos */
        let radians = angle * (Math.PI / 180);

        let xSpeed = Math.cos(radians) * speed;
        let ySpeed = Math.sin(radians) * speed;

        let positionX = 0;
        let positionY = 0;

        function animate()
        {
            positionX += xSpeed;
            positionY += ySpeed;

            ball.style.left = positionX + 'px';
            ball.style.top = positionY + 'px';

            /* bounce off the walls */
            if (positionX >= (window.innerWidth - 50) || positionX <= 0)
            {
                xSpeed *= -1;
            }

            if (positionY >= (window.innerHeight - 50) || positionY <= 0)
            {
                ySpeed *= -1;
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

    createBouncingBall();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

