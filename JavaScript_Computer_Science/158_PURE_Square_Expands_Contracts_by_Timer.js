javascript:(
/* Square_Expands_Contracts_by_Timer.js */
function()
{
    function createSquare()
    {
        let square = document.createElement('div');
        square.id = 'square';
        square.style.position = 'absolute';
        square.style.left = '100px';
        square.style.top = '50px';
        square.style.width = '100px';
        square.style.height = '100px';
        square.style.backgroundColor = 'aqua';
        square.style.transition = 'width 0.3s, height 0.3s';
        square.style.cursor = 'pointer';

        document.body.append(square);

        return square;
    }

    function updateSquareSize(square, expanding, size)
    {
        if (expanding)
        {
            size.width += 20;
            size.height += 20;

            if (size.width >= 300)
            {
                return { expanding: false, size };
            }
        }
        else
        {
            size.width -= 20;
            size.height -= 20;

            if (size.width <= 100)
            {
                return { expanding: true, size };
            }
        }

        square.style.width = size.width + 'px';
        square.style.height = size.height + 'px';

        return { expanding, size };
    }

    function startSquareTimer(square)
    {
        let expanding = true;
        let size = { width: 100, height: 100 };

        let timerInterval = setInterval(function()
        {
            let result = updateSquareSize(square, expanding, size);

            expanding = result.expanding;

            size = result.size;
        }, 1000);

        /* stop timer when square is clicked */
        square.onclick = function()
        {
            clearInterval(timerInterval);
        };
    }

    function initialize()
    {
        let square = createSquare();

        startSquareTimer(square);
    }

    initialize();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */
