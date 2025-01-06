javascript:(
/* object_keys.js */
function()
{
    let joan =
    {
        firstName: 'Joan',
        hairColor: 'Brown',
        weight: 120, /* lbs */
        height: 59, /* inches */
    };

    let joanKeys = Object.keys(joan);

    let theKeys = '';

    for (let x = 0; x < joanKeys.length; x++)
    {
        theKeys += joanKeys[x];
        theKeys += '\n';
    }

    console.log(theKeys);

}());

/*----*/

/*
firstName
hairColor
weight
height
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

