javascript:(
/* Algebra_Solves_Linear_Equation.js */
function()
{
    /* enter coefficients a and b */
    let a = parseFloat(prompt("Enter the coefficient a"));

    let b = parseFloat(prompt("Enter the constant b"));

    /* test if inputs are valid numbers */
    if (!isNaN(a) && !isNaN(b)) 
    {
        /* solve linear equation ax + b = 0 for x */
        let x = -b / a;

        alert("The solution for x is: " + x);
    }
    else
    {
        alert("Enter valid numeric coefficients.");
    }

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

