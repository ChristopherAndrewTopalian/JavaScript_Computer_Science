javascript:(
/* prompt_OK_Cancel_Button_Responses.js */
function()
{
    function askName()
    {
        let name = prompt("Enter Name");

        if (name == null)
        {
            return "You pressed the Cancel button";
        }
        if (name == "")
        {
            return "You pressed OK without first entering your name";
        }

        return name;
    }

    alert("Hi " + askName());

}());

/*
if the person enters their name
and presses OK, it says their name.
if the person presses the OK button
without first entering their name,
it tells them that they didn’t enter
their name. 
if the person presses the Cancel button
it tells them that they pressed the
Cancel button.
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

