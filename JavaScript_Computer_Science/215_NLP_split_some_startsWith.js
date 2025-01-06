javascript:(
/* NLP_split_some_startsWith.js */
function()
{
    function processLanguage()
    {
        let userInput = document.createElement('input');
        userInput.type = 'text';
        userInput.placeholder = 'Enter text to search for words starting with "n"';
        userInput.style.marginRight = '10px';
        document.body.append(userInput);

        /*-*/

        let searchButton = document.createElement('button');
        searchButton.innerText = 'Search';
        document.body.append(searchButton);

        /*-*/

        let resultDiv = document.createElement('div');
        resultDiv.style.marginTop = '10px';
        resultDiv.style.fontFamily = 'Arial';
        document.body.append(resultDiv);

        /*-*/

        searchButton.addEventListener('click', function()
        {
            /* get the user input */
            let sentence = userInput.value.trim();

            /* handle empty input */
            if (!sentence)
            {
                resultDiv.innerText = "Please enter a sentence.";
                return;
            }

            /* split the sentence into words */
            let words = sentence.split(/\s+/);

            /* check if any word starts with 'n' */
            let found = words.some(function(word)
            {
                /* case insensitive search */
                return word.toLowerCase().startsWith('n');
            });

            /* provide feedback to the user */
            if (found)
            {
                resultDiv.innerText = 'Found a word that starts with "n".';
            }
            else
            {
                resultDiv.innerText = 'No words found that start with "n".';
            }
        });
    }

    processLanguage();

}());

/* Found a word that starts with "n"! */

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

