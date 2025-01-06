javascript:(
/* createElement_id_Right_Click_Div.js */
function()
{
    function createDiv()
    {
        let ourDiv = document.createElement("div");
        ourDiv.id = "ourDiv";
        ourDiv.style.position = "absolute";
        ourDiv.style.left = 100 + "px";
        ourDiv.style.top = 100 + "px";
        ourDiv.style.paddingLeft = "10px";
        ourDiv.style.paddingRight = "10px";
        ourDiv.style.paddingTop = "5px";
        ourDiv.style.paddingBottom = "5px";
        ourDiv.style.background = "rgb(0, 0, 0)";
        ourDiv.style.borderStyle = "solid";
        ourDiv.style.borderWidth = "1px";
        ourDiv.style.borderRadius = "8px";
        ourDiv.style.borderColor = "rgb(0, 255, 255)";
        ourDiv.style.background = "rgb(0, 0, 0)";
        ourDiv.style.fontSize = "30px";
        ourDiv.style.fontWeight = "bold";
        ourDiv.style.color = "rgb(0, 255, 255)";
        ourDiv.style.textAlign = "center";
        ourDiv.innerHTML = "Right click this div. Choose Inspect.";
        document.body.append(ourDiv);
    }

    createDiv();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

