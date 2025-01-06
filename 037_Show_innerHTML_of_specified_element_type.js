javascript:(
/* Show_innerHTML_of_specified_element_type.js */
function()
{
    function showElementInnerHTML(whichElementType)
    {
        let report = "";

        let elements = document.getElementsByTagName(whichElementType);

        for (let x = 0; x < elements.length; x++)
        {
            report += elements[x].innerHTML;

            report += "\n";
        }

        console.log(report);

        alert(report);
    }

    showElementInnerHTML("p");

}());

/*
Show innerHTML of element types, such as:
/*
<p>: Paragraph elements.
<h1>, <h2>, <h3>, <h4>, <h5>, <h6>: Headings of different levels.
<div>: Div elements.
<span>: Span elements.
<li>: List item elements within <ul> or <ol>.
<a>: Anchor links.
<button>: Buttons.
<label>: Labels for form elements.
<textarea>: Textareas within forms.
<option>: Options within <select> elements.
<blockquote>: Block quotes.
<cite>: Citations within block quotes.
<abbr>: Abbreviations.
<code>: Code snippets.
<pre>: Preformatted text.
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

