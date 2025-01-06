javascript:(
/* Trigonometry_Sine_Wave_Motion.js */
function()
{
    let amplitude = 50;
    let frequency = 0.1;
    let xOffset = 0;
    let yOffset = 100;
    let canvasWidth = window.innerWidth;
    let canvasHeight = 200;

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

    function drawSineWave(context)
    {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        context.beginPath();

        for (let x = 0; x < canvasWidth; x += 1)
        {
            let y = amplitude * Math.sin(frequency * x + xOffset) + yOffset;
            context.lineTo(x, y);
        }

        context.strokeStyle = 'blue';
        context.lineWidth = 4;
        context.stroke();
    }

    function animateSineWave(context)
    {
        xOffset += 1;

        drawSineWave(context);

        requestAnimationFrame(function()
        {
            animateSineWave(context);
        });
    }

    function generateSineWaveWithMotion()
    {
        let context = createCanvas();

        animateSineWave(context);
    }

    generateSineWaveWithMotion();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

