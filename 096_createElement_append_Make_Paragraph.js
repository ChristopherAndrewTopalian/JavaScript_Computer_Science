javascript:(
/* createElement_append_Make_Paragraph.js */
function()
{
    function createParagraph()
    {
        let ourParagraph = document.createElement("p");
        ourParagraph.style.position = "absolute";
        ourParagraph.style.top = 100 + 'px';
        ourParagraph.style.left = 100 + 'px';
        ourParagraph.innerHTML = "Here is the text.";
        document.body.append(ourParagraph);
    }

    createParagraph();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

