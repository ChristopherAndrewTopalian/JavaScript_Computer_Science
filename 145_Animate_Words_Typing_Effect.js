javascript:(
/* Animate_Words_Typing_Effect.js */
function()
{
    function animateText()
    {
        let text = "Hi Everyone";
        let x = 0;
        let animationSpeed = 400;

        let textDiv = document.createElement("div");
        textDiv.style.position = "fixed";
        textDiv.style.top = "50%";
        textDiv.style.left = "50%";
        textDiv.style.transform = "translate(-50%, -50%)";
        textDiv.style.fontSize = "25px";
        document.body.append(textDiv);

        let animation = setInterval(function()
        {
            if (x < text.length)
            {
                textDiv.textContent = text.substring(0, x + 1);

                x++;
            }
            else
            {
                clearInterval(animation);
            }
        }, animationSpeed);
    }

    animateText();

}());

/*
displays a text of "Hi Everyone" with an animation. Each letter appears one by one.
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

