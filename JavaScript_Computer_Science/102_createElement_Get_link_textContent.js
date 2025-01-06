javascript:(
/* createElement_Get_link_textContent.js */
function()
{
    function createInfoDiv()
    {
        let report = "";

        let theLinks = document.getElementsByTagName("a");

        for (let x = 0; x < theLinks.length; x++)
        {
            report += '<a href = " ' + theLinks[x] + ' " target = "_blank">' + theLinks[x].textContent + '</a>';

            report += "<hr>";
        }

        let ourDiv = document.createElement("div");
        ourDiv.id = "theDiv";
        ourDiv.style.position = "absolute";
        ourDiv.style.left = "100px";
        ourDiv.style.top = "100px";
        ourDiv.style.width = "300px";
        ourDiv.style.height = "200px";
        ourDiv.style.paddingLeft = "10px";
        ourDiv.style.paddingRight = "10px";
        ourDiv.style.paddingBottom = "5px";
        ourDiv.style.paddingTop = "5px";
        ourDiv.style.borderRadius = "8px";
        ourDiv.style.background = "rgb(0, 0, 0)";
        ourDiv.style.zIndex = "1000";
        ourDiv.style.fontSize = 22 + "px";
        ourDiv.style.color = "rgb(0, 255, 255)";
        ourDiv.style.overflowY = "scroll";

        ourDiv.innerHTML = report;

        ourDiv.oncontextmenu = function()
        {
            document.getElementById("theDiv").remove();
        };

        document.body.append(ourDiv);
    }

    createInfoDiv();

}());

/* For example: we can search Google for the word News and then activate our script */

/*
The div is created on the page and the links of the page are shown in the div and are clickable.
The div is also scrollable.
*/

/*
Choose the sytax style that you like using more:

report += "<a href = ' " + theLinks[x] + " ' target = '_blank'>" + theLinks[x].textContent + "</a>";

report += '<a href = " ' + theLinks[x] + ' " target = "_blank">' + theLinks[x].textContent + '</a>';

report += '<a href = \'' + theLinks[x] + '\' target = "_blank"> '+theLinks[x].textContent+' </a>';

report += `<a href = "${theLinks[x]}" target = "_blank">${theLinks[x].textContent}</a>`;

*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

