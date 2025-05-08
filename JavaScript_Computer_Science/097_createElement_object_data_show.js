javascript:(
/* createElement_object_data_show.js */
function()
{
    function createInfoDiv()
    {
        let copper =
        {
            name: "copper",
            number: "29",
            link: "https://en.wikipedia.org/wiki/Copper"
        };

        let ourDiv = document.createElement("div");
        ourDiv.style.position = "absolute";
        ourDiv.style.left = "100px";
        ourDiv.style.top = "100px";
        ourDiv.style.paddingLeft = "10px";
        ourDiv.style.paddingRight = "10px";
        ourDiv.style.paddingBottom = "15px";
        ourDiv.style.paddingTop = "9px";
        ourDiv.style.zIndex = "1000";
        ourDiv.style.borderRadius = "8px";
        ourDiv.style.background = "rgb(0, 0, 0)";
        ourDiv.style.fontSize = "30px";
        ourDiv.style.color = "rgb(0, 255, 255)";
        ourDiv.style.textAlign = "center";
        document.body.append(ourDiv);
    
        /*-*/

        let nameDiv = document.createElement("div");
        nameDiv.textContent = copper.name;
        ourDiv.append(nameDiv);

        /*-*/

        let numberDiv = document.createElement("div");
        numberDiv.textContent = copper.number;
        ourDiv.append(numberDiv);

        /*-*/

        let linkDiv = document.createElement("div");
        ourDiv.append(linkDiv);

        /*-*/

        let anchor = document.createElement("a");
        anchor.href = copper.link;
        anchor.target = "_blank";
        anchor.textContent = "Link";
        linkDiv.append(anchor);
    }
    createInfoDiv();
}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

