javascript:(
/* NLP_search_textbox_for_words_starting_with_n.js */
function()
{
    let container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.right = '10px';
    container.style.top = '10px';
    container.style.padding = '10px';
    container.style.backgroundColor = 'lightgray';
    document.body.append(container);

    /*-*/

    let userInput = document.createElement('input');
    userInput.type = 'text';
    userInput.placeholder = 'Enter text to search for "n" words';
    container.append(userInput);

    /*-*/

    let searchButton = document.createElement('button');
    searchButton.innerText = 'Search';
    container.append(searchButton);

    /*-*/

    userInput.onkeydown = function(event)
    {
        if (event.key === "Enter")
        {
            event.preventDefault();
            searchButton.click();
        }
    };

    function searchInputText()
    {
        let searchText = userInput.value.toLowerCase();
        let words = searchText.split(/\s+/);

        let found = words.some(function(word)
        {
            return word.startsWith('n');
        });

        if (found)
        {
            alert('Found a word that starts with "n" in the input text!');
        }
        else
        {
            alert('No words found that start with "n" in the input text.');
        }
    }

    searchButton.addEventListener('click', searchInputText);
}());

/* Search text entered in search box */

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

