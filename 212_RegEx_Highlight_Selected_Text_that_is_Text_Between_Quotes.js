javascript:(
/* RegEx_Highlight_Selected_Text_that_is_Text_Between_Quotes.js */
function()
{
    let text = window.getSelection().toString();

    let regex = /"([^"]+)"/g;

    let matches = text.match(regex);

    if (matches)
    {
        /* show each match on a new line */
        alert(matches.join("\n"));
    }

}());

/* RegEx - Highlight Selected Text that is Text Between Quotes - join - shows each match on separate lines */

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

