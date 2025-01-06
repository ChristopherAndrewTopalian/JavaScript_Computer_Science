javascript:(
/* Array_of_Objects_Random_Object.js */
function()
{
    let programmingFacts =
    [
        {
            name: "C",
            fact: "Invented in 1972",
        },
        {
            name: "C++",
            fact: "Invented in 1985",
        },
        {
            name: "JavaScript",
            fact: "Invented in 1995",
        } 
    ];

    function generateRandomFact(whichArray)
    {
        let randomIndex = Math.floor(Math.random() * whichArray.length);

        let randomFact = whichArray[randomIndex];

        let message = randomFact.name + "\n" + randomFact.fact + "\n";

        console.log(message);

        alert(message);
    }

    generateRandomFact(programmingFacts);

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

