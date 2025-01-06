javascript:(
/* AI_Cube_chases_cube_that_moves_at_random_positions.js */
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

    function moveRandomly()
    {
        let maxX = window.innerWidth - 50;
        let maxY = window.innerHeight - 50;
        cube2.style.top = Math.random() * maxY + "px";
        cube2.style.left = Math.random() * maxX + "px";
    }

    /* move second cube randomly every 2 seconds */
    setInterval(moveRandomly, 2000);

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

        let speed = 2;

        let offsetX = (deltaX / distance) * speed;
        let offsetY = (deltaY / distance) * speed;

        cube1.style.left = cube1X + offsetX + "px";
        cube1.style.top = cube1Y + offsetY + "px";
    }

    /* first cube chases second cube every 30 milliseconds */
    setInterval(chase, 30);

}());

/*
const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY); is used to calculate the Euclidean distance between two points in a two dimensional Cartesian coordinate system.
*/

/*
calculates the distance between two points in a two dimensional space using the Pythagorean theorem.
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

