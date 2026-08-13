javascript:(
/* Calculus_Line_Segments_Connecting_Points.js */
function()
{
    let x1;
    let y1;
    let x2;
    let y2;

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
    origin.style.left = "197.5px";
    origin.style.top = "197.5px";
    origin.title = "Origin (0, 0)";
    origin.style.width = "5px";
    origin.style.height = "5px";
    origin.style.backgroundColor = "red";
    origin.style.borderRadius = "50%";
    graphContainer.append(origin);

    /* prompt user to enter coordinates */
    x1 = parseFloat(prompt("Enter the x-coordinate of the first point:"));
    y1 = parseFloat(prompt("Enter the y-coordinate of the first point:"));
    x2 = parseFloat(prompt("Enter the x-coordinate of the second point:"));
    y2 = parseFloat(prompt("Enter the y-coordinate of the second point:"));

    /* validate input to ensure script doesn't break if canceled */
    if (!isNaN(x1) && !isNaN(y1) && !isNaN(x2) && !isNaN(y2))
    {
        /* create point 1 */
        let p1 = document.createElement("div");
        p1.style.position = "absolute";
        p1.style.left = (197.5 + x1) + "px";
        p1.style.top = (197.5 - y1) + "px";
        p1.style.width = "5px";
        p1.style.height = "5px";
        p1.style.backgroundColor = "rgb(100, 200, 255)";
        p1.style.borderRadius = "50%";
        p1.title = "Point 1: (" + x1 + ", " + y1 + ")";
        graphContainer.append(p1);

        /* create point 2 */
        let p2 = document.createElement("div");
        p2.style.position = "absolute";
        p2.style.left = (197.5 + x2) + "px";
        p2.style.top = (197.5 - y2) + "px";
        p2.style.width = "5px";
        p2.style.height = "5px";
        p2.style.backgroundColor = "rgb(255, 150, 50)";
        p2.style.borderRadius = "50%";
        p2.title = "Point 2: (" + x2 + ", " + y2 + ")";
        graphContainer.append(p2);

        /* calculate length and angle */
        let length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        
        /* invert the y difference since DOM y goes down, but math y goes up */
        let angle = Math.atan2(-(y2 - y1), (x2 - x1)); 

        /* create connecting line segment */
        let lineSegment = document.createElement("div");
        lineSegment.style.position = "absolute";
        lineSegment.style.height = "2px";
        lineSegment.style.width = length + "px";
        lineSegment.style.backgroundColor = "green";
        
        /* set transform origin to the middle-left edge to rotate cleanly */
        lineSegment.style.transformOrigin = "0 50%"; 
        lineSegment.style.transform = "rotate(" + angle + "rad)";
        
        /* snap start exactly to the center of point 1 */
        lineSegment.style.left = (200 + x1) + "px";
        lineSegment.style.top = (199 - y1) + "px"; 
        graphContainer.append(lineSegment);

        /* find the midpoint of the line for our label */
        let midX = (x1 + x2) / 2;
        let midY = (y1 + y2) / 2;

        /* draw distance label at the midpoint */
        let distanceLabel = document.createElement("div");
        distanceLabel.style.position = "absolute";
        distanceLabel.style.left = (205 + midX) + "px";
        distanceLabel.style.top = (190 - midY) + "px";
        distanceLabel.style.fontSize = "12px";
        distanceLabel.style.color = "lightgreen";
        
        /* toFixed(2) keeps irrational numbers from overflowing the screen */
        distanceLabel.textContent = "Length: " + length.toFixed(2);
        graphContainer.append(distanceLabel);
    }
}());

/* Calculus Line Segments - Connecting Points - Cartesian Coodinate System */

/*
Cartesian Line Segment & Distance

draws line segments to connect two points on the graph. 

prompts user to enter the coordinates of two points and then draw the line segment connecting them.

shows the important foundational concept of straight lines and their equations in precalculus
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

