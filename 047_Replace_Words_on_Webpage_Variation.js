javascript:(
/* Replace_Words_on_Webpage_Variation.js */
function()
{
    function replaceText(whichElement)
    {
        whichElement.innerHTML = whichElement.innerHTML.replace(/\bgoogle\b/gi, 'Orc Factory');
    }

    let elements = document.getElementsByTagName('*');

    for (let x = 0; x < elements.length; x++)
    {
        replaceText(elements[x]);
    }

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

