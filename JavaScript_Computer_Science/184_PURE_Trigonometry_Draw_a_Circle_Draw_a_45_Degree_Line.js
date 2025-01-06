javascript:(
/* Trigonometry_Draw_a_Circle_Draw_a_45_Degree_Line.js */
function()
{
    let canvasWidth = 400;
    let canvasHeight = 400;

    function createCanvas()
    {
        let canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.left = '0';
        canvas.style.top = '0';
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.zIndex = '10000';
        canvas.style.pointerEvents = 'none';
        document.body.append(canvas);
        return canvas.getContext('2d');
    }

    function drawCircleWithLine(context)
    {
        let centerX = canvasWidth / 2;
        let centerY = canvasHeight / 2;
        let radius = 150;

        /* draw circle in aqua */
        context.strokeStyle = 'aqua';
        context.lineWidth = 4;
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        context.stroke();

        /* draw 45-degree line in white */
        let angleInDegrees = 45;
        let angleInRadians = (angleInDegrees * Math.PI) / 180;
        let endX = centerX + radius * Math.cos(angleInRadians);
        let endY = centerY + radius * Math.sin(angleInRadians);

        context.strokeStyle = 'white';
        context.lineWidth = 4;
        context.beginPath();
        context.moveTo(centerX, centerY);
        context.lineTo(endX, endY);
        context.stroke();

        /* label angle in degrees */
        context.font = '30px arial';
        context.fillStyle = 'white';
        context.fillText(angleInDegrees + '°', centerX + 20, centerY - 20);
    }

    function generateCircleWithLine()
    {
        let context = createCanvas();

        drawCircleWithLine(context);
    }

    generateCircleWithLine();

}());

/*
creates a circle with a 45 degree line and a label
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

