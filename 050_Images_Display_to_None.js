javascript:(
/* Images_Display_to_None.js */
function()
{
    function hideImages()
    {
        let images = document.getElementsByTagName('img');

        for (let x = 0; x < images.length; x++)
        {
            if (window.getComputedStyle(images[x]).display === "none")
            {
                images[x].style.display = "block";
            }
            else
            {
                images[x].style.display = "none";
            }
        }
    }

    hideImages();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

