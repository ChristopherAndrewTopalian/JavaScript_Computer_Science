javascript:(
/* Links_List_and_Count.js */
function()
{
    function listLinksAndCount()
    {
        let links = document.links;

        let linkCount = links.length;

        if (linkCount === 0)
        {
            alert('No links found on the page');
        }
        else
        {
            let linkSources = [];

            for (let x = 0; x < linkCount; x++)
            {
                linkSources.push(links[x].href);
            }

            let data = 'Total Links: ' +
            linkCount + '\n\n' +
            'Link Sources: ' +
            linkSources.join('\n');

            console.log(data);

            alert(data);
        }
    }

    listLinksAndCount();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

