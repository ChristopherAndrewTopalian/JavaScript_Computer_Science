javascript:(
/* Show_elements_of_specified_class_name.js
*/
function()
{
    function showData()
    {
        let nameList = document.querySelectorAll(".buttonStyle");

        let theNames = [];

        for (let x = 0; x < nameList.length; x++)
        {
            nameList[x].style.borderColor = "rgb(0, 255, 255)";

            theNames += nameList[x].textContent;

            theNames += "\n";
        }

        return theNames.toString();
    }

    console.log(showData());

    alert(showData());

}());

/* Show elements of a class name on https://CollegeOfScripting.weebly.com */

/*
This Bookmarklet is designed to work ONLY on https://CollegeOfScripting.weebly.com
Right Click on the buttons, such as the JavaScript button and then
Choose Inspect Element

We see that the Element has a css style class called .buttonStyle
We use the dot syntax before the class name.
The css style class name is .buttonStyle
Inspecting an Element
After Right Clicking on the Button and choosing Inspect Element, the Inspector Opens and allows us to see the name of the class of that Button.
In this case, the buttons of this Weebly Website have a class called 
buttonStyle
Thus, we simply use that class name, when we want to reference only elements that use that class. This allows us to examine any webpage and inspect any element to find their class name, which therefore allows us the ability to reference any elements on the page that use that class.
*/

/* After Right Clicking on the button and choosing Inspect Element, the Inspector Opens and shows the name of the class of that button. In this case, the button of this Weebly Website has a class named buttonStyle */

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

