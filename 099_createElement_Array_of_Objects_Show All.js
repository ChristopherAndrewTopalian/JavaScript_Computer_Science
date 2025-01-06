javascript:(
/* createElement_Array_of_Objects_Show All.js */
function()
{
    function createInfoDiv()
    {
        let myRecord =
        [
            {
                name: "Key",
                weight: 140,
                link: "https://google.com/news"
            },
            {
                name: "Donald",
                weight: 160,
                link: "https://google.com"
            }
        ];

        /*-*/

        let ourDiv = document.createElement("div");
        ourDiv.style.position = "absolute";
        ourDiv.style.left = "100px";
        ourDiv.style.top = "100px";
        ourDiv.style.paddingLeft = "10px";
        ourDiv.style.paddingRight = "10px";
        ourDiv.style.paddingBottom = "2px";
        ourDiv.style.paddingTop = "2px";
        ourDiv.style.borderRadius = "8px";
        ourDiv.style.background = "rgb(0, 0, 0)";
        ourDiv.style.zIndex = "1000";
        ourDiv.style.fontSize = 30 + "px";
        ourDiv.style.color = "rgb(0, 255, 255)";
        ourDiv.style.textAlign = "right";
        document.body.append(ourDiv);

        let output = "";

        for (let x = 0; x < myRecord.length; x++)
        {
            output += "<hr>";
            output += myRecord[x].name;
            output += " ";
            output += myRecord[x].weight;
            output += " ";
            output += '<a href = \'' + myRecord[x].link + '\' target = "_blank"> Link </a>';
        }

        output += '<hr>';

        ourDiv.innerHTML = output;

    }

    createInfoDiv();

}());

/*
Creates a New div on the page with style & url link of an array of objects, displaying all entries.
We loop through the entries of the myRecords array to display all of them at once.
The for loop will only continue for as many entries that are found. In this case, there are only two entries.
We display all of the entries on a div that we have made using createElement.
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

