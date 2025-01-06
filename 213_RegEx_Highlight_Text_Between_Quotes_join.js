javascript:(
/* RegEx_Highlight_Text_Between_Quotes_join.js */
function()
{
    let text = document.body.textContent;

    let regex = /"([^"]+)"/g;

    let matches = text.match(regex);

    if (matches)
    {
        /* show each match on a new line */
        alert(matches.join("\n"));
    }

}());

/* RegEx - Highlight Text Between Quotes - join - shows each match on new line */

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

