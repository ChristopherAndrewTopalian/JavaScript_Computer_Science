javascript:(
/* NLP_search_page_for_word_with_search_box.js */
function()
{
    let container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.right = '10px';
    container.style.top = '10px';
    container.style.padding = '10px';
    container.style.backgroundColor = 'lightgray';
    document.body.append(container);

    let userInput = document.createElement('input');
    userInput.type = 'text';
    userInput.placeholder = 'Search for a word';
    container.append(userInput);

    let searchButton = document.createElement('button');
    searchButton.innerText = 'Search';
    container.append(searchButton);

    userInput.onkeydown = function(event)
    {
        if (event.key === "Enter")
        {
            event.preventDefault();
            searchButton.click();
        }
    };

    function searchPageContent()
    {
        let searchText = userInput.value.toLowerCase();

        let pageText = document.body.innerText.toLowerCase();

        let words = pageText.split(/\s+/);

        let found = words.some(function(word)
        {
            return word.startsWith(searchText);
        });

        if (found)
        {
            alert(`Found a word that starts with "${searchText}" on the page!`);
        }
        else
        {
            alert(`No words found that start with "${searchText}" on the page.`);
        }
    }

    searchButton.addEventListener('click', searchPageContent);

}());

/* Search the page's text content using the search box */

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

