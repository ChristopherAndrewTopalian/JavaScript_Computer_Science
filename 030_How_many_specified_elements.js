javascript:(
/* How_many_specified_elements.js */
function()
{
    function howManySpecifiedElements(whichElementType)
    {
        let elements = document.getElementsByTagName(whichElementType);

        let elementCount = elements.length;

        return elementCount;
    }

    console.log(howManySpecifiedElements("a"));

    alert(howManySpecifiedElements("a"));

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

