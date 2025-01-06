javascript:(
/* Calculus_Line_Segments_Connecting_Points.js */
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

    /* prompt user to enter coordinates of first point */
    let x1 = parseFloat(prompt("Enter the x-coordinate of the first point:"));
    let y1 = parseFloat(prompt("Enter the y-coordinate of the first point:"));

    /* prompt user to enter coordinates of second point */
    let x2 = parseFloat(prompt("Enter the x-coordinate of the second point:"));
    let y2 = parseFloat(prompt("Enter the y-coordinate of the second point:"));

    /* create line segment */
    let lineSegment = document.createElement("div");
    lineSegment.style.position = "absolute";
    lineSegment.style.width = "2px";

    /* calculate length */
    lineSegment.style.height = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) + "px";

    /* set transformation origin */
    lineSegment.style.transformOrigin = "0 0";

    /* rotate line */
    lineSegment.style.transform = `rotate(${Math.atan2(y2 - y1, x2 - x1)}rad)`;

    /* set starting point */
    lineSegment.style.left = (200 + x1) + "px";

    /* set starting point */
    lineSegment.style.top = (200 - y1) + "px";

    /* line color */
    lineSegment.style.background = "green";

    graphContainer.append(lineSegment);

    /* show coordinates of two points */
    alert("You plotted a line segment from (" + x1 + ", " + y1 + ") to (" + x2 + ", " + y2 + ").");

}());

/* Calculus Line Segments - Connecting Points - Cartesian Coodinate System */

/*
draws line segments to connect two points on the graph. 

prompts user to enter the coordinates of two points and then draw the line segment connecting them.

shows the important foundational concept of straight lines and their equations in precalculus
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

