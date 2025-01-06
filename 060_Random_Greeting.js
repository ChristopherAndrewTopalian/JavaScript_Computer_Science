javascript:(
/* Random_Greeting.js */
function()
{
    let greetings =
    [
        "Hi",
        "Howdy.",
        "How ya doing?",
        "You having fun?",
        "Glad you are here.",
        "Nice weather today.",
        "It's such a nice day out."
    ];

    function makeRandomMessage(whichArray)
    {
        let randomGreeting = whichArray[Math.floor(Math.random() * whichArray.length)];

        return randomGreeting;
    }

    let message = makeRandomMessage(greetings);

    console.log(message);

    alert(message);

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

