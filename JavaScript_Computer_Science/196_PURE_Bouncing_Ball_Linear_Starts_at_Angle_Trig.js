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
        return ball;
    }

    function calculateSpeed(angle, speed)
    {
        let radians = angle * (Math.PI / 180);
        let xSpeed = Math.cos(radians) * speed;
        let ySpeed = Math.sin(radians) * speed;
        return { xSpeed: xSpeed, ySpeed: ySpeed };
    }

    function animateBall(ball, positionX, positionY, xSpeed, ySpeed)
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

        return { positionX: positionX, positionY: positionY, xSpeed: xSpeed, ySpeed: ySpeed };
    }

    function gameLoop(ball, positionX, positionY, xSpeed, ySpeed)
    {
        let { positionX: newX, positionY: newY, xSpeed: newXSpeed, ySpeed: newYSpeed } = 
            animateBall(ball, positionX, positionY, xSpeed, ySpeed);

        requestAnimationFrame(function()
        {
            gameLoop(ball, newX, newY, newXSpeed, newYSpeed);
        });
    }

    function startBouncingBall()
    {
        let ball = createBouncingBall();
        /* initial angle in degrees */
        let angle = 45;
        /* speed of the ball */
        let speed = 2;

        /* calculate initial speeds based on the angle */
        let { xSpeed, ySpeed } = calculateSpeed(angle, speed);

        let initialPositionX = 0;
        let initialPositionY = 0;

        gameLoop(ball, initialPositionX, initialPositionY, xSpeed, ySpeed);
    }

    startBouncingBall();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

