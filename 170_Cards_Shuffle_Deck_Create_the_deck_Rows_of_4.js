javascript:(
/* Cards_Shuffle_Deck_Create_the_deck_Rows_of_4.js */
function()
{
    function shuffleDeck()
    {
        let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

        let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

        let deck = [];

        /* create the deck as an array of objects */
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

    /*-*/

    /* create a container div to hold the cards */
    let container = document.createElement('div');
    container.style.position = "absolute";
    container.style.left = "100px";
    container.style.top = "10px";
    container.style.display = 'grid';
    container.style.gridTemplateColumns = 'repeat(4, 1fr)';
    container.style.gridGap = '10px';
    container.style.margin = '20px';

    /* add each card to the container */
    for (let i = 0; i < shuffledDeck.length; i++)
    {
        let cardDiv = document.createElement('div');
        cardDiv.textContent = shuffledDeck[i].number + " of " + shuffledDeck[i].suit;
        cardDiv.style.padding = '10px';
        cardDiv.style.border = '1px solid';
        cardDiv.style.borderColor = 'rgb(255, 255, 255)';
        cardDiv.style.borderRadius = '5px';
        cardDiv.style.fontSize = '20px';
        cardDiv.style.textAlign = 'center';
        container.append(cardDiv);
    }

    document.body.append(container);

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

