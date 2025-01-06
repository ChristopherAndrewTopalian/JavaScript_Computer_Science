javascript:(
/* Array_of_Objects_Filter_by_Year_and_Month.js */
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
        },

        {
            name: 'Joan',
            date: '1983/05/17'
        },

        {
            name: 'Jane',
            date: '1987/08/12'
        }
    ];

    function sortByDate(whichArray, direction) 
    {
        if (direction == "up")
        {
            whichArray.sort(function(a, b)
            {
                return new Date(a.date) - new Date(b.date);
            });
        }

        else if (direction == "down")
        {
            whichArray.sort(function(a, b)
            {
                return new Date(b.date) - new Date(a.date);
            });
        }
    }

    function showData(whichArray)
    {
        for (let x = 0; x < whichArray.length; x++)
        {
            if (whichArray[x].date >= "1983/05")
            {
                console.log(whichArray[x].name + "\n" + whichArray[x].date); 
            }
        }
    }

    sortByDate(people, "up");

    showData(people);

}());

/*
Joan
1983/05/17

Jane
1987/08/12
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

