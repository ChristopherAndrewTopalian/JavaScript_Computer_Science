javascript:(
/* createElement_Array_of_Objects_link.js */
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

        let ourDiv = document.createElement("div");
        ourDiv.style.position = "absolute";
        ourDiv.style.left = "100px";
        ourDiv.style.top = "100px";
        ourDiv.style.width = "100px";
        ourDiv.style.paddingLeft = "10px";
        ourDiv.style.paddingRight = "10px";
        ourDiv.style.paddingBottom = "15px";
        ourDiv.style.paddingTop = "9px";
        ourDiv.style.borderRadius = "8px";
        ourDiv.style.background = "rgb(0, 0, 0)";
        ourDiv.style.zIndex = "1000";
        ourDiv.style.fontSize = 30 + "px";
        ourDiv.style.color = "rgb(0, 255, 255)";
        ourDiv.style.textAlign = "center";
        ourDiv.innerHTML = myRecord[0].name;
        ourDiv.innerHTML += "<br>";
        ourDiv.innerHTML += myRecord[0].weight;
        ourDiv.innerHTML += "<br>";
        ourDiv.innerHTML += '<a href = \'' + myRecord[0].link + '\' target = "_blank"> Link </a>';

        document.body.append(ourDiv);
    }

    createInfoDiv();

}());

/*
We make an Array of Objects that we named myRecord

The 0 entry of the myRecord array is Key.

The 1 entry of the myRecord array is Donald.
In the above script, we only display one record, which is the entry that has the name Key.

To display the first entry name we use myRecord[0].name
To display the first entry weight we use myRecord[0].weight

To display the second entry name we use myRecord[1].name
To display the second entry weight we use myRecord[1].weight
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

