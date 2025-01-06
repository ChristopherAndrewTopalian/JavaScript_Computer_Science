javascript:(
/* Calculate_Factorial.js */
function()
{
    function calculateFactorial(whichNumber)
    {
        if (whichNumber < 0)
        {
            return "The factorial is not defined for negative numbers";
        }
        else if (whichNumber === 0)
        {
            return 1;
        }
        else
        {
            let factorial = 1;

            for (let x = 1; x <= whichNumber; x++)
            {
                factorial *= x;
            }

            return factorial;
        }
    }

    /* prompt user for a number */
    let number = parseInt(prompt("Enter a non-negative integer to calculate its factorial:"));

    /* check if the input is valid */
    if (isNaN(number) || number < 0)
    {
        alert("Enter a non-negative integer");
    }
    else
    {
        /* calculate the factorial */
        let factorialResult = calculateFactorial(number);

        /* display the result */
        alert("Factorial of " + number + " is: " + factorialResult);
    }

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

