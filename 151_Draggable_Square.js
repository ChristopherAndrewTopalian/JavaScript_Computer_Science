javascript:(
/* Draggable_Square.js */
function()
{
    function createDraggableSquare()
    {
        let square = document.createElement('div');
        square.style.position = 'absolute';
        square.style.left = '100px';
        square.style.top = '100px';
        square.style.width = '50px';
        square.style.height = '50px';
        square.style.backgroundColor = 'aqua';
        square.style.cursor = 'move';

        /* initialize variables for tracking drag state */
        let isDragging = false;
        let offsetX;
        let offsetY;

        /* mouse down event and start dragging */
        square.addEventListener('mousedown', function(event)
        {
            isDragging = true;

            offsetX = event.clientX - square.getBoundingClientRect().left;

            offsetY = event.clientY - square.getBoundingClientRect().top;
        });

        /* mouse up event and stop dragging */
        window.addEventListener('mouseup', function()
        {
            isDragging = false;
        });

        /* mouse move event and update square pos */
        window.addEventListener('mousemove', function(event)
        {
            if (isDragging)
            {
                let x = event.clientX - offsetX;
                let y = event.clientY - offsetY;

                /* make square stay within the viewport */
                x = Math.min(Math.max(x, 0), window.innerWidth - 50);

                y = Math.min(Math.max(y, 0), window.innerHeight - 50);

                square.style.left = x + 'px';
                square.style.top = y + 'px';
            }
        });

        document.body.append(square);
    }

    createDraggableSquare();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

