javascript:(
/* Array_of_Objects_with_Nested_Arrays.js */
function()
{
    function showData()
    {
        let data =
        [
            {
                name: 'James',
                age: 30,
                hobbies: ['Gardening', 'Gaming']
            },

            {
                name: 'Joan',
                age: 25,
                hobbies: ['Hiking', 'Painting']
            }
        ];

        let message = 'Array of Objects:\n';

        for (let x = 0; x < data.length; x++)
        {
            let person = data[x];

            message +=
            'Name: ' + person.name +
            ', Age: ' + person.age + ', Hobbies: [' + person.hobbies.join(', ') + ']\n';
        }

        console.log(message);

        alert(message);
    }

    showData();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

