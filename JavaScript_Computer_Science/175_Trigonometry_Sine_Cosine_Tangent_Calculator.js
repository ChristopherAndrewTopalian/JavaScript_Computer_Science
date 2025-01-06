javascript:(
/* Trigonometry_Sine_Cosine_Tangent_Calculator.js */
function()
{
    function calculateTrigonometry()
    {
        let angle = parseFloat(prompt("Enter an angle in degrees:"));

        if (!isNaN(angle))
        {
            let radians = angle * (Math.PI / 180);
            let sine = Math.sin(radians);
            let cosine = Math.cos(radians);
            let tangent = Math.tan(radians);

            let message = "Angle: " + angle + " degrees\n";

            message += "Sine: " + sine.toFixed(4) + "\n";
            message += "Cosine: " + cosine.toFixed(4) + "\n";

            message += "Tangent: " + tangent.toFixed(4);

            alert(message);
        }
        else
        {
            alert("Angle wasn't entered in numbers");
        }
    }

    calculateTrigonometry();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

