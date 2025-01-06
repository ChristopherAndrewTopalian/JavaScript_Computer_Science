javascript:(
/* Array_of_Objects_map_filter_reduce.js */
function()
{
    function showNamesOverSpecifiedAge(whichAge)
    {
        let data =
        [
            {
                name: 'John',
                age: 30
            },
            {
                name: 'Jane',
                age: 25
            },
            {
                name: 'James',
                age: 35
            },
            {
                name: 'Alice',
                age: 28
            },
            {
                name: 'Joan',
                age: 40
            }
        ];

        /* map to extract names */
        let names = [];

        for (let x = 0; x < data.length; x++)
        {
            names.push(data[x].name);
        }
        console.log('Mapped Names:', names);

        /*-*/

        /* filter to find people over 30 */
        let ageArray = [];

        for (let x = 0; x < data.length; x++)
        {
            if (data[x].age >= whichAge)
            {
                ageArray.push(data[x]);
            }
        }

        console.log('People Over ' + whichAge + ' Years Old:', ageArray);

        /* reduce to calculate total age */
        let totalAge = 0;

        for (let x = 0; x < data.length; x++)
        {
            totalAge += data[x].age;
        }

        console.log('Total Age:', totalAge);

        /*-*/

        /* show each item */
        for (let x = 0; x < data.length; x++)
        {
            console.log('Name:', data[x].name, '| Age:', data[x].age);
        }
    }

    showNamesOverSpecifiedAge(30);

}());

/* Array of Objects - map, filter, reduce - Finds Ages Over Specified Age */

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

