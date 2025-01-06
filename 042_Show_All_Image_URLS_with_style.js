javascript:(
/* Show_All_Image_URLS_with_style.js */
function()
{
    function showImageUrls()
    {
        let report = "";

        let images = document.getElementsByTagName("img");

        for (let x = 0; x < images.length; x++)
        {
            images[x].style.borderStyle = "solid";

            images[x].style.borderWidth = 2 + "px";

            images[x].style.borderColor = "rgb(0, 255, 255)";

            report += images[x].src;

            report += "\n";
        }

        console.log(report);

        alert(report);
    }

    showImageUrls();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

