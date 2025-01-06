javascript:(
/* Random_Background_Color_Variation.js */
function()
{
    function randomValue()
    {
        return Math.floor(Math.random() * 255);
    }

    let red = randomValue();
    let green = randomValue();
    let blue = randomValue();

    let randomColor = 'rgb('+red+', '+green+', '+ blue+')';

    document.body.style.backgroundColor = randomColor;

}());

/*--*/

/* Template Literal Version */
/*
let randomColor = `rgb(${red}, ${green}, ${blue})`;
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

