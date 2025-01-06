javascript:(
/* Drag_any_element_on_webpage.js */
function()
{
    function makePageElementsDraggable()
    {
        let dragItem = null;
        let offsetX;
        let offsetY;

        document.addEventListener('mousedown', function(e)
        {
            dragItem = e.target;

            offsetX = e.clientX - dragItem.getBoundingClientRect().left;

            offsetY = e.clientY - dragItem.getBoundingClientRect().top;

            dragItem.style.position = 'absolute';

            document.body.append(dragItem);
        });

        document.addEventListener('mousemove', function(e)
        {
            if (dragItem)
            {
                dragItem.style.left = e.clientX - offsetX + 'px';

                dragItem.style.top = e.clientY - offsetY + 'px';
            }
        });

        document.addEventListener('mouseup', function()
        {
            dragItem = null;
        });
    }

    makePageElementsDraggable();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

