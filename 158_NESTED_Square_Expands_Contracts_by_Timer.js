javascript:(
/* Square_Expands_Contracts_by_Timer.js */
function()
{
    function createExpandingContractingSquare()
    {
        /* create a square element */
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

        /* stop timer when square is clicked */
        square.onclick = function()
        {
            clearInterval(timerInterval);
        };

        document.body.append(square);

        /*-*/

        /* width and height */
        let width = 100;
        let height = 100;

       /* keep track of expanding or contracting */
        let expanding = true;

        function updateSquareSize()
        {
            if (expanding)
            {
                width += 20;
                height += 20;

                if (width >= 300)
                {
                    expanding = false;
                }
            } 
            else
            {
                width -= 20;
                height -= 20;

                if (width <= 100)
                {
                    expanding = true;
                }
            }

            square.style.width = width + 'px';
            square.style.height = height + 'px';
        }

        /* update square's size every 1 second */
        let timerInterval = setInterval(updateSquareSize, 1000);
    }

    createExpandingContractingSquare();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

