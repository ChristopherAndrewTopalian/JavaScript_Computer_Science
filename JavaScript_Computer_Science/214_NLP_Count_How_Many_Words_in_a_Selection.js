javascript:(
/* NLP_Count_How_Many_Words_in_a_Selection.js */
function()
{
    function getWordAndCharCountOfSelected()
    {
        /* get selected text */
        let selectedText = window.getSelection().toString();

        /* count the number of words */
        /* \s+ matches one or more whitespace characters (spaces, tabs, linebreaks)
        /* splits the text based on any combination of whitespace characters */
        let wordCount = selectedText.split(/\s+/).filter(Boolean).length;

        /* count the number of characters */
        let charCount = selectedText.length;

        /* return the statistics */
        return "Word Count: " + wordCount + "\nCharacter Count: " + charCount;
    }

    alert(getWordAndCharCountOfSelected());

}());

/*
counts the number of words by splitting the text using a regular expression that matches one or more whitespace characters (spaces, tabs, and linebreaks) and then filters out any empty strings from the resulting array before counting its length.
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

