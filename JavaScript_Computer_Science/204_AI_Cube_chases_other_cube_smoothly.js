javascript:(
/* AI_Cube_chases_other_cube_smoothly.js*/
function()
{
    /* create div for the first cube */
    let cube1 = document.createElement("div");
    cube1.style.position = "absolute";
    cube1.style.top = "100px";
    cube1.style.left = "100px";
    cube1.style.width = "50px";
    cube1.style.height = "50px";
    cube1.style.backgroundColor = "blue";
    document.body.append(cube1);

    /* create div for the second cube */
    let cube2 = document.createElement("div");
    cube2.style.position = "absolute";
    cube2.style.top = "200px";
    cube2.style.left = "200px";
    cube2.style.width = "50px";
    cube2.style.height = "50px";
    cube2.style.backgroundColor = "red";
    document.body.append(cube2);

    /*-*/

    function moveRandomly(cube)
    {
        let maxX = window.innerWidth - 50;
        let maxY = window.innerHeight - 50;

        let targetX = Math.random() * maxX;
        let targetY = Math.random() * maxY;

        let speed = 70;

        let distance = Math.sqrt(
        Math.pow(targetX - cube.offsetLeft, 2) +
        Math.pow(targetY - cube.offsetTop, 2)
        );

        /* milliseconds */
        let duration = (distance / speed) * 1000;

        cube.style.transition =
        "left " + duration + "ms linear, top " + duration + "ms linear";

        cube.style.left = targetX + "px";
        cube.style.top = targetY + "px";

        setTimeout(function()
        {
            /* clear the transition */
            cube.style.transition = "";

            moveRandomly(cube);

        }, duration);
    }

    /* move both cubes towards each other */
    moveRandomly(cube1);
    moveRandomly(cube2);

    /*-*/

    function chase()
    {
        let cube1X = parseFloat(cube1.style.left) || 0;
        let cube1Y = parseFloat(cube1.style.top) || 0;
        let cube2X = parseFloat(cube2.style.left) || 0;
        let cube2Y = parseFloat(cube2.style.top) || 0;

        let deltaX = cube2X - cube1X;
        let deltaY = cube2Y - cube1Y;
        let distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        let speed = 70;

        let offsetX = (deltaX / distance) * speed;
        let offsetY = (deltaY / distance) * speed;

        cube1.style.left = cube1X + offsetX + "px";
        cube1.style.top = cube1Y + offsetY + "px";

        requestAnimationFrame(chase);
    }

    /* move first cube to chase second cube */
    chase();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

