javascript:(
/* border_all_elements.js */
function()
{
    function borderAllElements()
    {
        let elements = document.querySelectorAll('*');

        for(let x = 0; x < elements.length; x++)
        {
            elements[x].style.border = 'solid 0.5px rgb(255, 255, 255)';
        }
    }

    borderAllElements();

}());

/*----*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

