javascript:(
/* Square_Moves_in_Square_Pattern_by_Timer.js */
function()
{
    function createSquare()
    {
        let square = document.createElement('div');
        square.style.position = 'absolute';
        square.style.left = '20px';
        square.style.top = '20px';
        square.style.width = '50px';
        square.style.height = '50px';
        square.style.backgroundColor = 'aqua';
        square.style.transition = 'transform 2s';

        document.body.append(square);
        return square;
    }

    function updateSquarePosition(square, position, direction)
    {
        if (direction === 0)
        {
            /* move right */
            position.x += 100;
        }
        else if (direction === 1)
        {
            /* move down */
            position.y += 100;
        }
        else if (direction === 2)
        {
            /* move left */
            position.x -= 100;
        }
        else if (direction === 3)
        {
            /* move up */
            position.y -= 100;
        }

        square.style.transform = 'translate(' + position.x + 'px, ' + position.y + 'px)';

        /* update direction - cycle through 0 to 3 */
        return (direction + 1) % 4;
    }

    function startSquareMovement(square)
    {
        let position = { x: 20, y: 20 };
        let direction = 0;

        /* move square initially */
        direction = updateSquarePosition(square, position, direction);

        /* keep moving square */
        setInterval(function()
        {
            direction = updateSquarePosition(square, position, direction);
        }, 2000);
    }

    function initializeSquareMovement()
    {
        let square = createSquare();

        startSquareMovement(square);
    }

    initializeSquareMovement();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

