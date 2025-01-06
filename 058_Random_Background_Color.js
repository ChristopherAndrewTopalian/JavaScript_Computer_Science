javascript:(
/* Random_Background_Color.js */
function()
{
    function randomBackgroundColor()
    {
        let randomColor = 'rgb(' +
        Math.floor(Math.random() * 255) + ',' +
        Math.floor(Math.random() * 255) + ',' +
        Math.floor(Math.random() * 255) + ')';

        document.body.style.backgroundColor = randomColor;
    }

    randomBackgroundColor();

}());

/*--*/

/* Template Literal Version */
/*
let randomColor = `rgb(
${ Math.floor(Math.random() * 255) },
${ Math.floor(Math.random() * 255) },
${ Math.floor(Math.random() * 255) }
)`;
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

