javascript:(
/* Array_of_Objects_JSON_stringify.js*/
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
        console.log(whichArray);

        console.log(JSON.stringify(whichArray));
    }

    showData(people);

}());

/*
Here is the Output

console.log(people);
0: Object { name: "Melissa", date: "1980/03/01" }

1: Object { name: "Tabitha", date: "1983/04/05" }

console.log(JSON.stringify(people));
[{"name":"Melissa","date":"1980/03/01"},{"name":"Tabitha","date": "1983/04/05"}]
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

