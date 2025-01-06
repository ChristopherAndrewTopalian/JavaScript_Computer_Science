javascript:(
/* Shows_Mouse_Position_when_person_clicks_the_screen.js */
function()
{
    function mousePos()
    {
        let mouseX = event.pageX;
        let mouseY = event.pageY;

        let mousePos =
        "Mouse" + "\n" +
        "X " + mouseX + "\n" +
        "Y " + mouseY;

        console.log(mousePos);

        document.title = mousePos;
    }

    window.addEventListener("click", mousePos, false);

    mousePos();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

