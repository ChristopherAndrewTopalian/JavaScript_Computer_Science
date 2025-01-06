javascript:(
/* NLP_search_sentence_for_words_starting_with_n.js */
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

    let sentenceDiv = document.createElement('div');
    let sentence = "It's a very nice day out.";
    sentenceDiv.innerText = 'Sentence: ' + sentence;
    sentenceDiv.style.marginBottom = '10px';
    container.append(sentenceDiv);

    let searchButton = document.createElement('button');
    searchButton.innerText = 'Search for "n" words';
    container.append(searchButton);

    function searchPredefinedSentence()
    {
        let words = sentence.split(' ');

        let found = words.some(function(word)
        {
            return word.startsWith('n');
        });

        if (found)
        {
            alert('Found a word that starts with "n" in the sentence!');
        }
        else
        {
            alert('No words found that start with "n" in the sentence.');
        }
    }

    searchButton.addEventListener('click', searchPredefinedSentence);
}());

/* Search a predefined sentence */

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

