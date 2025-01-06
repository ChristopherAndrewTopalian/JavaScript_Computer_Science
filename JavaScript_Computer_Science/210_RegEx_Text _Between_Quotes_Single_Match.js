javascript:(
/* RegEx_Text _Between_Quotes_Single_Match.js */
function()
{
    let text = `This is "some text" within double quotes.`;

    let regex = /"([^"]+)"/g;

    let match = text.match(regex);

    if (match)
    {
        alert(match);
    }

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

