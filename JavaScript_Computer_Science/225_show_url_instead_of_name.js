javascript:(
/* show_url_instead_of_name.js */
function()
{
    let links = document.getElementsByTagName('a');

    for (let i = 0; i < links.length; i++)
    {
        links[i].textContent = links[i].href;
    }

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

