javascript:(
/* Square_Expands_Contracts_by_Click.js */
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

        /* starting width and height */
        let width = 100;
        let height = 100;

        /* initialize a variable to keep track of the direction (expanding or contracting) */
        let expanding = true;

        /* onclick adjust square's size */
        square.onclick = function()
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
        };

        document.body.append(square);
    }

    createExpandingContractingSquare();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

