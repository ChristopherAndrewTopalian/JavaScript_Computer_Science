javascript: (
/* ooo_show_object_all.js */
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

    console.log(JSON.stringify(people, null, 2));
}());

/*
{
  "christopher": {
    "name": "Christopher",
    "score": 98
  },
  "jane": {
    "name": "Jane",
    "score": 95
  }
}
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */