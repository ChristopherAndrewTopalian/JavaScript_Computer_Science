javascript:(
/* Calculate_Circle_Circumference_and_Area.js */
function()
{
    function calculateCircleProperties()
    {
        let radius = parseFloat(prompt("Enter the radius of the circle:"));

        if (!isNaN(radius) && radius >= 0)
        {
            let area = Math.PI * Math.pow(radius, 2);

            let circumference = 2 * Math.PI * radius;

            alert(
                "Radius: " + radius.toFixed(2) + "\n" +
                "Area: " + area.toFixed(2) + "\n" +
                "Circumference: " + circumference.toFixed(2)
            );
        }
        else
        {
            alert("Enter a valid positive number for the radius.");
        }
    }

    calculateCircleProperties();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

