javascript:(
/* Array_of_Objects_for_loop.js */
function()
{
    let people =
    [
        {
            name: 'Melissa',
            date: '1980/03/01',
        },

        {
            name: 'Tabitha',
            date: '1983/04/05'
        }
    ];

    function showData(whichArray)
    {
        for (let x = 0; x < whichArray.length; x++)
        {
            console.log(whichArray[x]);
        }
    }

    showData(people);

}());

/*

Object { name: "Melissa", date: "1980/03/01" }

Object { name: "Tabitha", date: "1983/04/05" }

*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

