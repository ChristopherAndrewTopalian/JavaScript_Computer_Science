javascript:(
/* Array_of_Objects_Calculate_the_Average_Score.js */
function()
{
    function calculateAverageScore()
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
                name: "James",
                score: 78
            },

            {
                name: "David",
                score: 88
            },

            {
                name: "Jennifer",
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

        /* calculate the average score */
        let averageScore = calculateAverage(students);

        /* display the result */
        alert("Average Exam Score: " + averageScore.toFixed(2));
    }

    calculateAverageScore();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

