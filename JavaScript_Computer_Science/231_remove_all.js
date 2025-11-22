javascript:(
/* remove_all.js */
function()
{
    function removeAll()
    {
        let elements = document.querySelectorAll('*');

        for(let x = 0; x < elements.length; x++)
        {
            elements[x].remove();
        }
    }

    removeAll();

}());

/*----*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

