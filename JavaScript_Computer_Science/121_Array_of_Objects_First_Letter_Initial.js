javascript:(
/* Array_of_Objects_First_Letter_Initial.js */
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

    function showFirstLetterOfName(whichArray)
    {
        let x = 0

        while (x < whichArray.length)
        {
            console.log(whichArray[x].name[0]);

            x += 1;
        }
    }

    showFirstLetterOfName(people);

}());

/*
M
T
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

