javascript:(
/* Mouse_Arrow_Effect_Circles.js */
function()
{
    function changeMouseArrow()
    {
        let theEffect = document.createElement('style');

        theEffect.innerText = `
     * {
            cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="white" stroke-width="2" fill="transparent"/><circle cx="12" cy="12" r="6" stroke="white" stroke-width="2" fill="transparent"/><circle cx="12" cy="12" r="2" fill="white"/></svg>'), auto !important;
        }`;

        document.head.append(theEffect);
    }

    changeMouseArrow();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

