javascript:(
/* Calculus_Cartesian_coordinate_system.js */
function()
{
    let x;
    let y;

    /* graph container */
    let graphContainer = document.createElement("div");
    graphContainer.style.position = "absolute";
    graphContainer.style.left = "5px";
    graphContainer.style.top = "5px";
    graphContainer.style.width = "400px";
    graphContainer.style.height = "400px";
    graphContainer.style.border = "1px solid #777";
    graphContainer.style.backgroundColor = "rgb(30, 30, 30)";
    graphContainer.style.color = "white";
    graphContainer.style.fontFamily = "sans-serif";
    document.body.append(graphContainer);

    /* draw x-axis */
    let xAxis = document.createElement("div");
    xAxis.style.position = "absolute";
    xAxis.style.left = "0px";
    xAxis.style.top = "200px";
    xAxis.style.width = "400px";
    xAxis.style.height = "1px";
    xAxis.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    graphContainer.append(xAxis);

    /* draw y-axis */
    let yAxis = document.createElement("div");
    yAxis.style.position = "absolute";
    yAxis.style.left = "200px";
    yAxis.style.top = "0px";
    yAxis.style.width = "1px";
    yAxis.style.height = "400px";
    yAxis.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
    graphContainer.append(yAxis);

    /* origin point (0, 0) */
    let origin = document.createElement("div");
    origin.id = "origin";
    origin.style.position = "absolute";
    origin.style.left = "197.5px"; /* offset by half width to true center */
    origin.style.top = "197.5px";
    origin.title = "Origin (0, 0)";
    origin.style.width = "5px";
    origin.style.height = "5px";
    origin.style.backgroundColor = "red";
    origin.style.borderRadius = "50%";
    graphContainer.append(origin);

    /* prompt user to enter a point's coordinates */
    x = parseFloat(prompt("Enter the x-coordinate:"));
    y = parseFloat(prompt("Enter the y-coordinate:"));

    /* prevent plotting if user cancels or enters non-numbers */
    if (!isNaN(x) && !isNaN(y)) {
        /* create user's point and plot it on graph */
        let userPoint = document.createElement("div");
        userPoint.style.position = "absolute";
        userPoint.style.left = (197.5 + x) + "px";
        userPoint.style.top = (197.5 - y) + "px";
        userPoint.style.width = "5px";
        userPoint.style.height = "5px";
        userPoint.title = "x: " + x + ", y: " + y;
        userPoint.style.backgroundColor = "rgb(100, 200, 255)";
        userPoint.style.borderRadius = "50%";
        graphContainer.append(userPoint);

        /* visual text label next to the plotted point */
        let pointLabel = document.createElement("div");
        pointLabel.style.position = "absolute";
        pointLabel.style.left = (205 + x) + "px";
        pointLabel.style.top = (190 - y) + "px";
        pointLabel.style.fontSize = "12px";
        pointLabel.textContent = "(" + x + ", " + y + ")";
        graphContainer.append(pointLabel);
    }
}());

/* Calculus - Cartesian coordinate system - plot points on a graph */

/*
creates a graph with an origin (0, 0) at the center.

we enter the x and y coordinates for a point and it our script will plot those points on the graph.

this visualizes the Cartesian coordinate system by plotting points on a graph.

this is a very important concept of precalculus for more advanced topics in mathematics and science.
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

