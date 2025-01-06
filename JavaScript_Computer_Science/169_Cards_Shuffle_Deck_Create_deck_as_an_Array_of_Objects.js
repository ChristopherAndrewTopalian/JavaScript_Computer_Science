javascript:(
/* Cards_Shuffle_Deck_Create_deck_as_an_Array_of_Objects.js */
function()
{
    function shuffleDeck()
    {
        let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

        let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

        let deck = [];

        /* create deck as array of objects */
        for (let i = 0; i < suits.length; i++)
        {
            for (let j = 0; j < values.length; j++)
            {
                deck.push(
                {
                    suit: suits[i],
                    number: values[j]
                });
            }
        }

        /* shuffle the deck */
        for (let i = 0; i < deck.length - 1; i++)
        {
            let j = i + Math.floor(Math.random() * (deck.length - i));

            let temp = deck[i];

            deck[i] = deck[j];

            deck[j] = temp;
        }

        return deck;
    }

    let shuffledDeck = shuffleDeck();

    /* show as objects */
    console.log(shuffledDeck);

    /* show as JSON */
    console.log(JSON.stringify(shuffledDeck));

    /* show as JSON */
    alert(JSON.stringify(shuffledDeck));

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

