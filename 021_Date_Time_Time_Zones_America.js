javascript:(
/* Date_Time_Time_Zones_America.js */
function()
{
    function getCurrentTimeAndDate(timezone, label)
    {
        let now = new Date();

        let options = {
            timeZone: timezone,
            timeStyle: 'short',
            dateStyle: 'medium'
        };

        let formattedTimeAndDate = now.toLocaleString(undefined, options);

        return label + " " + formattedTimeAndDate;
    }

    console.log(getCurrentTimeAndDate('America/Los_Angeles', 'West Coast'));

    console.log(getCurrentTimeAndDate('America/Denver', 'Mountain'));

    console.log(getCurrentTimeAndDate('America/Chicago', 'Central'));

    console.log(getCurrentTimeAndDate('America/New_York', 'East Coast'));

}());

/* West Coast Oct 19, 2023, 12:31 PM
Mountain Oct 19, 2023, 1:31 PM
Central Oct 19, 2023, 2:31 PM
East Coast Oct 19, 2023, 3:31 PM */

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

