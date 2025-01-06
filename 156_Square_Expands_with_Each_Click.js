javascript:(
/* Square_Expands_with_Each_Click.js */
function()
{
    function createExpandingSquare()
    {
        /* create a square element */
        let square = document.createElement('div');
        square.id = "square";
        square.style.position = "absolute";
        square.style.left = 100 + "px";
        square.style.top = 50 + "px";
        square.style.width = '100px';
        square.style.height = '100px';
        square.style.backgroundColor = 'aqua';
        square.style.transition = 'width 0.3s, height 0.3s';
        square.style.cursor = 'pointer';

        /* starting width and height */
        let width = 100;
        let height = 100;

        /* add click event listener to grow the square on each click */
        square.onclick = function()
        {
            width += 20;
            height += 20;

            square.style.width = width + 'px';
            square.style.height = height + 'px';
        };

        document.body.append(square);
    }

    createExpandingSquare();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

