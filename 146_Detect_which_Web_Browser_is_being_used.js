javascript:(
/* Detect_which_Web_Browser_is_being_used.js */
function()
{
    function detectWebBrowser()
    {
        if (navigator.userAgent.toLowerCase().indexOf('firefox') !== -1)
        {
            return 'You are using Firefox';
        }
        
        if (navigator.userAgent.toLowerCase().indexOf('chrome') !== -1)
        {
            return 'You are using Chrome';
        }
        
        if (navigator.userAgent.toLowerCase().indexOf('safari') !== -1)
        {
            return 'You are using Safari';
        }

        /* if none of the above, display a generic message */
        return 'No known browser detected';
    }

    console.log(detectWebBrowser());

    alert(detectWebBrowser());

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

