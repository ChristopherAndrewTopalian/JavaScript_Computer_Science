javascript:(
/* YouTube_Get_URL_Title_Description_Date.js */
function()
{
    function getInfo()
    {
        let nameList = document.querySelectorAll(".style-scope ytd-video-primary-info-renderer");

        let theNames = [];

        for (let x = 0; x < nameList.length; x++)
        {
            theNames += nameList[x].textContent;

            theNames += "\n";
        }

        let theTextArea = document.createElement("textarea");
        theTextArea.style.position = "absolute";
        theTextArea.style.left = 100 + 'px';
        theTextArea.style.top = 200 + 'px';
        theTextArea.style.width = 700 + 'px';
        theTextArea.style.height = 200 + 'px';
        theTextArea.style.zIndex = "1000";
        theTextArea.style.border = "solid 2px rgba(0,0,100,1.0)";
        theTextArea.style.background = "white";
        theTextArea.style.fontFamily = "arial";
        theTextArea.style.fontWeight = "normal";
        theTextArea.style.fontSize = "medium";
        theTextArea.style.color = "black";
        theTextArea.style.textAlign = "center";

        theTextArea.setAttribute("readonly", "true");

        theTextArea.value = theNames;

        document.body.append(theTextArea);
    }

    getInfo();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

