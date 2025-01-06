javascript:(
/* Array_of_Objects_Special_way_to_show_keys_and_values.js */
function()
{
    let people =
    [
        {
            name: 'Melissa',
            date: '2021/04/01',
        },
        {
            name: 'Tabitha',
            date: '2021/04/05'
        }
    ];

    for (let x = 0; x < people.length; x++)
    {
        let person = people[x];

        let entries = Object.entries(person);

        for (let m = 0; m < entries.length; m++)
        {
            let key = entries[m][0];

            let value = entries[m][1];

            console.log(key + ': ' + value);
        }
    }

}());

/*
we use a for loop to iterate through this array and access both the key and value for each property in the object

name: Melissa
date: 2021/04/01
name: Tabitha
date: 2021/04/05
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

