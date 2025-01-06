javascript:(
/* Trigonometry_Cosine.js */
function()
{
    function getAngleInDegree()
    {
        let angle = parseFloat(prompt("Enter an angle in degrees:"));

        return angle;
    }

    function convertDegreeToRadian(angle)
    {
        if (!isNaN(angle))
        {
            /* angle in degree converted to radian */
            let radians = angle * (Math.PI / 180);

            return radians;
        }
        else
        {
            alert("Angle wasn't entered in numbers");
        }
    }

    let theRadians = convertDegreeToRadian(getAngleInDegree());

    function cosineOfAngle()
    {
        let cosine = Math.cos(theRadians).toFixed(2);

        return cosine;
    }

    console.log(cosineOfAngle());

    alert(cosineOfAngle());

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

