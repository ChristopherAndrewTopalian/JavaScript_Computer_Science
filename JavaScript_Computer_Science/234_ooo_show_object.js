javascript: (
/* ooo_show_object.js */
function()
{
    let people = {
        "christopher":
        {
            name: "Christopher",
            score: 98
        },
        "jane":
        {
            name: "Jane",
            score: 95
        }
    };

    for (let key in people)
    {
        console.log(people[key]);
    }
}());

/*
Object { name: "Christopher", score: 98 }
​
name: "Christopher"
​
score: 98
​
<prototype>: Object { … }


Object { name: "Jane", score: 95 }
​
name: "Jane"
​
score: 95
​
<prototype>: Object { … }
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */