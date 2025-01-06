javascript:(
/* Calculus_Cartesian_coordinate_system.js */
function()
{
    /* graph container */
    let graphContainer = document.createElement("div");
    graphContainer.style.position = "absolute";
    graphContainer.style.width = "400px";
    graphContainer.style.height = "400px";
    graphContainer.style.border = "1px solid #000";
    document.body.append(graphContainer);

    /* origin point (0, 0) */
    let origin = document.createElement("div");
    origin.style.position = "absolute";
    origin.style.left = "200px";
    origin.style.top = "200px";
    origin.style.width = "5px";
    origin.style.height = "5px";
    origin.style.background = "red";
    graphContainer.append(origin);

    /* prompt user to enter a point's coordinates */
    let x = parseFloat(prompt("Enter the x-coordinate:"));
    let y = parseFloat(prompt("Enter the y-coordinate:"));

    /* create user's point and plot it on graph */
    let userPoint = document.createElement("div");
    userPoint.style.position = "absolute";
    userPoint.style.left = (200 + x) + "px";
    userPoint.style.top = (200 - y) + "px";
    userPoint.style.width = "5px";
    userPoint.style.height = "5px";
    userPoint.style.background = "blue";
    graphContainer.append(userPoint);

    /* show coordinates of user's point */
    alert("You plotted a point at (" + x + ", " + y + ") on the graph.");

}());

/* Calculus - Cartesian coordinate system - plot points on a graph*/

/*
creates a graph with an origin (0, 0) at the center.

we enter the x and y coordinates for a point and it our script will plot those points on the graph.

this visualizes the Cartesian coordinate system by plotting points on a graph.

this is a very important concept of precalculus for more advanced topics in mathematics and science.
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

