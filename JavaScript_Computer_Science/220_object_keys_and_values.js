javascript:(
/* object_keys_and_values.js */
function()
{
    let joan =
    {
        firstName: 'Joan',
        hairColor: 'Brown',
        weight: 120, /* lbs */
        height: 59, /* inches */
    };

    function getKeysAndValues(whichObject)
    {
        let theData = '';

        /* get the keys (property names) of the object as an array */
        let theKeys = Object.keys(whichObject);

        for (let i = 0; i < theKeys.length; i++) 
        {
            /* get the key (property name) */
            let key = theKeys[i];

            /* get the value of that key */
            let value = whichObject[key];

            theData += key + ': ' + value + '\n';
        }

        return theData;
    }

    console.log(getKeysAndValues(joan));

}());

/*----*/

/*
firstName: Joan
hairColor: Brown
weight: 120
height: 59
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

