javascript:(
/* Statistics_Total_Average_Highest.js */
function()
{
    let people =
    [
        {
            name: "Jane",
            score: 98
        },
        {
            name: "Jennifer",
            score: 85
        },
        {
            name: "Joan",
            score: 92
        },
        {
            name: "John",
            score: 83
        }
    ];

    function getStatistics(whichArray)
    {
        let sum = 0;

        for (let i = 0; i < whichArray.length; i++)
        {
            sum += whichArray[i].score;
        }

        let average = sum / whichArray.length;

        let highestScore = -1;

        let highestScorer = "";

        for (let i = 0; i < whichArray.length; i++)
        {
            if (whichArray[i].score > highestScore)
            {
                highestScore = whichArray[i].score;

                highestScorer = whichArray[i].name;
            }
        }

        alert("Total people: " + whichArray.length + "\nTotal score: " + sum + "\nAverage score: " + average + "\nHighest scorer: " + highestScorer + " with a score of " + highestScore);
    }

    getStatistics(people);

}());

/*

Total people: 4
Total score: 358
Average score: 89.5
Highest scorer: Jane with a score of 98

*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

