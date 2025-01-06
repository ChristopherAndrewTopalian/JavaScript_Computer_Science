javascript:(
/* object_values_for_loop.js */
function()
{
    let joan =
    {
        firstName: 'Joan',
        hairColor: 'Brown',
        weight: 120, /* lbs */
        height: 59, /* inches */
    };

    let joanValues = Object.values(joan);

    let theValues = '';

    for (let x = 0; x < joanValues.length; x++)
    {
        theValues += joanValues[x];
        theValues += '\n';
    }

    console.log(theValues);

}());

/*----*/

/*
Joan
Brown
120
59
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

