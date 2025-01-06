javascript:(
/* Replace_Images_with_a_Random_Image_from_Array.js */
function()
{
    let textures =
    [
        'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/wood1.jpg',

        'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/copper.jpg',

        'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/silver.jpg',

        'https://collegeofscripting.weebly.com/uploads/6/4/4/8/64482293/gold.jpg',
    ];

    function replaceImages()
    {
        let images = document.getElementsByTagName('img');

        for (let x = 0; x < images.length; x++)
        {
            let imageIndex = x % textures.length;

            images[x].src = textures[imageIndex];

            images[x].alt = 'Replaced Image';
        }
    }

    replaceImages();

}());

/* replaces all images on the current page with random images from our array */

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

