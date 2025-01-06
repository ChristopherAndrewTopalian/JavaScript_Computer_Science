javascript:(
/* Array_of_Objects_Emoji_Fun.js */
function()
{
    let funObjects =
    [
        {
            name: "Smiling Face",
            description: "A face with a big smile 😃",
        },

        {
            name: "Big Hat",
            description: "A big hat 🎩",
        },

        {
            name: "SunShades",
            description: "A pair of sunshades 😎",
        },
    ];

    let message = "Fun Objects:\n\n";

    for (let x = 0; x < funObjects.length; x++)
    {
        message += "Name: " + funObjects[x].name + "\n";

        message += "Description: " + funObjects[x].description + "\n\n";
    }

    console.log(message);

    alert(message);

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

