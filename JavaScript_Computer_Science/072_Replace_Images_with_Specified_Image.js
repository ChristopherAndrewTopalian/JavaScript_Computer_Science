javascript:(
/* Replace_Images_with_Specified_Image.js */
function()
{
    function replaceImages()
    {
        let images = document.getElementsByTagName('img');

        for (let x = 0; x < images.length; x++)
        {
            images[x].src = 'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/asphalt.jpg';

            images[x].alt = 'Asphalt';
        }
    }

    replaceImages();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

