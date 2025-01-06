javascript:(
/* Array_of_Objects_push_with_prompt.js */
function()
{
    let people =
    [
        {
            name: "Jane",
            eyeColor: "Brown",
        },
        {
            name: "Jennifer",
            eyeColor: "Blue",
        }
    ];

    /* create a new person object */
    let newPerson = {};

    /* ask the person their name */
    newPerson.name = prompt("Enter Name:");

    /* ask the person their eye color */
    newPerson.eyeColor = prompt("Enter Eye Color:");

    /* add new person to people array */
    people.push(newPerson);

    /* show updated people array */
    console.log(people);

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

