javascript:(
/* Array_of_Objects_Find_Max_Min_Temperature.js */
function()
{
    function calculateMinMaxTemperature()
    {
        let cities =
        [
            {
                name: "New York",
                temperature: 90
            },

            {
                name: "Los Angeles",
                temperature: 82
            },

            {
                name: "Chicago",
                temperature: 76
            },

            {
                name: "Boston",
                temperature: 95
            },

            {
                name: "Denver",
                temperature: 87
            },
        ];

        function findMaxTemperature(whichArray)
        {
            let max = whichArray[0].temperature;

            for (let x = 1; x < whichArray.length; x++)
            {
                if (whichArray[x].temperature > max)
                {
                    max = whichArray[x].temperature;
                }
            }
            return max;
        }

        function findMinTemperature(whichArray)
        {
            let min = whichArray[0].temperature;

            for (let x = 1; x < whichArray.length; x++)
            {
                if (whichArray[x].temperature < min)
                {
                    min = whichArray[x].temperature;
                }
            }
            return min;
        }

        /* find max and min temperatures */
        let maxTemperature = findMaxTemperature(cities);

        let minTemperature = findMinTemperature(cities);

        /* show the results */
        alert("Maximum Temperature: " + maxTemperature + "°F\nMinimum Temperature: " + minTemperature + "°F");
    }

    calculateMinMaxTemperature();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

