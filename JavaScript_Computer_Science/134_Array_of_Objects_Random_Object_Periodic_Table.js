javascript:(
/* Array_of_Objects_Random_Object_Periodic_Table.js */
function()
{
    let periodicTable =
    [
        {
            symbol: "H",
            name: "Hydrogen",
            atomicNumber: 1,
        },

        {
            symbol: "He",
            name: "Helium",
            atomicNumber: 2,
        },

        {
            symbol: "Li",
            name: "Lithium",
            atomicNumber: 3,
        },

        {
            symbol: "Be",
            name: "Beryllium",
            atomicNumber: 4,
        }
    ];

    function generateRandomFact(whichArray)
    {
        let randomIndex = Math.floor(Math.random() * whichArray.length);

        let randomFact = whichArray[randomIndex];

        let message = randomFact.symbol + "\n" + randomFact.name + "\n" + randomFact.atomicNumber;

        console.log(message);

        alert(message);
    }

    generateRandomFact(periodicTable);

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

