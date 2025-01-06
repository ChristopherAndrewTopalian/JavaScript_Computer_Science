javascript:(
/* Trigonometry_Angle_between_two_objects_Constant_Updates.js */
function()
{
    let object1 = document.createElement("div");
    object1.style.position = "absolute";
    object1.style.top = "50px";
    object1.style.left = "50px";
    object1.style.width = "20px";
    object1.style.height = "20px";
    object1.style.background = "red";
    document.body.append(object1);

    /*-*/

    let object2 = document.createElement("div");
    object2.style.position = "absolute";
    object2.style.top = "100px";
    object2.style.left = "200px";
    object2.style.width = "20px";
    object2.style.height = "20px";
    object2.style.background = "blue";
    document.body.append(object2);

    function calculateAngle()
    {
        let deltaX = object2.offsetLeft - object1.offsetLeft;

        let deltaY = object2.offsetTop - object1.offsetTop;

        let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        return angle;
    }

    function updateAngleDisplay()
    {
        let angle = calculateAngle();

        console.log("Angle between objects: " + angle.toFixed(2) + " degrees");
    }

    function moveObjectDown()
    {
        let top = parseInt(object2.style.top) || 0;

        object2.style.top = (top + 1) + "px";

        /* move the blue object down */
        updateAngleDisplay();
    }

    function animate()
    {
        moveObjectDown();
        requestAnimationFrame(animate);
    }

    animate();

    /* start moving blue object down and updating angle */
    moveObjectDown();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

