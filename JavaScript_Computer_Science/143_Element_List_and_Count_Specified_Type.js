javascript:(
/* Element_List_and_Count_Specified_Type.js */
function()
{
    function listAndCount(whichElementType)
    {
        let elements = document.getElementsByTagName(whichElementType);

        let elementCount = elements.length;

        if (elementCount === 0)
        {
            alert('No ' + whichElementType + 's found on this page');
        }
        else
        {
            let elementContents = [];

            for (let x = 0; x < elementCount; x++)
            {
                elementContents.push(elements[x].textContent);
            }

            let data = 'Total ' +
            whichElementType + 's: ' +
            elementCount + '\n\n' +
            whichElementType + ' ' +
            'Contents:' + '\n' +
            elementContents.join('\n');

            console.log(data);
            alert(data);
        }
    }

    listAndCount('a');

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

