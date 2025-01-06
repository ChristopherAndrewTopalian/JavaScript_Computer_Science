javascript:(
/* Array_of_Objects_Calculate_Average_Score_Standard_Deviation.js */
function()
{
    let students =
    [
        {
            name: "Alice",
            score: 85
        },

        {
            name: "Bob",
            score: 92
        },

        {
            name: "Jennifer",
            score: 78
        },

        {
            name: "David",
            score: 88
        },

        {
            name: "Joan",
            score: 95
        },
    ];

    function calculateAverage(scores)
    {
        let total = 0;

        for (let x = 0; x < scores.length; x++)
        {
            total += scores[x].score;
        }

        return total / scores.length;
    }

    function calculateStandardDeviation(scores)
    {
        let average = calculateAverage(scores);

        let variance = 0;

        for (let x = 0; x < scores.length; x++)
        {
            variance += Math.pow(scores[x].score - average, 2);
        }

        let stdDeviation = Math.sqrt(variance / scores.length);

        return stdDeviation;
    }

    /* calculate average score and standard deviation */
    let averageScore = calculateAverage(students);

    let standardDeviation = calculateStandardDeviation(students);

    /* display the results */
    alert("Average Score: " + averageScore.toFixed(2) + "\nStandard Deviation: " + standardDeviation.toFixed(2));

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

