javascript:(
/* Random_Quote_Generator.js */
function()
{
    function generateRandomQuote()
    {
        let quotes =
        [
            "Always be kind",
            "Be excellent to each other",
            "Live long and prosper"
        ];

        let randomIndex = Math.floor(Math.random() * quotes.length);

        let randomQuote = quotes[randomIndex];

        return randomQuote;
    }

    let quote = generateRandomQuote();

    console.log(quote);

    alert(quote);

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

