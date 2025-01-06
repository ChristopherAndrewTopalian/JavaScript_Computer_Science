javascript:(
/* Pythagorean_Theorem.js */
function()
{
    function calculateHypotenuse(a, b)
    {
        return Math.sqrt(a * a + b * b);
    }

    function displayResult(a, b, c)
    {
        alert(
            "Side A: " + a + "\n" +
            "Side B: " + b + "\n" +
            "Hypotenuse C: " + c.toFixed(2)
        );
    }

    /* user inputs lengths of side A, side B */
    let sideA = parseFloat(prompt("Enter the length of side A:"));

    let sideB = parseFloat(prompt("Enter the length of side B:"));

    /* check if the input is valid */
    if (isNaN(sideA) || isNaN(sideB))
    {
        alert("Enter only valid numbers");
    }
    else
    {
        /* calculate hypotenuse with the Pythagorean Theorem */
        let hypotenuse = calculateHypotenuse(sideA, sideB);

        /* display the result */
        displayResult(sideA, sideB, hypotenuse);
    }

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

