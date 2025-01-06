javascript:(
/* Square_Moves_in_Square_Pattern_by_Timer.js */
function()
{
    function createSquareMoveInSquarePattern()
    {
        /* create a square element */
        let square = document.createElement('div');
        square.style.position = 'absolute';
        square.style.left = '20px';
        square.style.top = '20px';
        square.style.width = '50px';
        square.style.height = '50px';
        square.style.backgroundColor = 'aqua';
        square.style.transition = 'transform 2s';

        /* starting position */
        let x = 20;
        let y = 20;

        /* 0 is right, 1 is down, 2 is left, 3 is up */
        let direction = 0;

        document.body.append(square);

        function moveSquare()
        {
            if (direction === 0)
            {
                x += 100;
            }
            else if (direction === 1)
            {
                y += 100;
            }
            else if (direction === 2)
            {
                x -= 100;
            }
            else if (direction === 3)
            {
                y -= 100;
            }

            square.style.transform = 'translate(' + x + 'px, ' + y + 'px)';

            /* update direction */
            direction = (direction + 1) % 4;
        }

        /* start moving the square */
        moveSquare();

        /* repeat square pattern continuously */
        setInterval(moveSquare, 2000);
    }

    createSquareMoveInSquarePattern();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

