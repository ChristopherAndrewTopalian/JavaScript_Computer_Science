javascript:(
/* calculus_graphing_nonlinear_functions.js
Graphing Non-Linear Functions (Parabola) */
function()
{
    let userX;
    let calculatedY;
    let scale = 0.05;

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

    /* draw the parabola: f(x) = 0.05 * x^2 */
    /* we use a loop to plot many small points to form a curve */
    for (let i = -200; i <= 200; i++) {
        let currentX = i;
        let currentY = scale * Math.pow(currentX, 2);

        /* only plot if it fits inside our 400x400 container bounds */
        if (currentY <= 200) {
            let dot = document.createElement("div");
            dot.style.position = "absolute";
            dot.style.left = (200 + currentX) + "px";
            dot.style.top = (200 - currentY) + "px";
            dot.style.width = "2px";
            dot.style.height = "2px";
            dot.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
            graphContainer.append(dot);
        }
    }

    /* prompt user to enter an x-coordinate */
    userX = parseFloat(prompt("Enter an x-coordinate (between -63 and 63) to plot on the curve f(x) = 0.05 * x²:"));

    if (!isNaN(userX)) {
        /* calculate exact Y based on the function */
        calculatedY = scale * Math.pow(userX, 2);

        if (calculatedY <= 200) {
            /* plot user point */
            let userPoint = document.createElement("div");
            userPoint.style.position = "absolute";
            userPoint.style.left = (197.5 + userX) + "px";
            userPoint.style.top = (197.5 - calculatedY) + "px";
            userPoint.style.width = "5px";
            userPoint.style.height = "5px";
            userPoint.style.backgroundColor = "rgb(255, 50, 100)";
            userPoint.style.borderRadius = "50%";
            userPoint.title = "f(" + userX + ") = " + calculatedY.toFixed(2);
            graphContainer.append(userPoint);

            /* label the point */
            let pointLabel = document.createElement("div");
            pointLabel.style.position = "absolute";
            pointLabel.style.left = (205 + userX) + "px";
            pointLabel.style.top = (190 - calculatedY) + "px";
            pointLabel.style.fontSize = "12px";
            pointLabel.style.color = "rgb(255, 100, 150)";
            pointLabel.textContent = "(" + userX + ", " + calculatedY.toFixed(2) + ")";
            graphContainer.append(pointLabel);
        } else {
            alert("That point exceeds our scanner's vertical range! Try an X value closer to zero.");
        }
    }
}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

