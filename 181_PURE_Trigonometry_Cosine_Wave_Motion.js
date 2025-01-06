javascript:(
/* Trigonometry_Cosine_Wave_Motion.js */
function()
{
    let amplitude = 50;
    let frequency = 0.05;
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

    function drawCosineWaves(context)
    {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        
        /* draw cosine wave in red */
        context.beginPath();
        context.strokeStyle = 'red';
        context.lineWidth = 4;

        for (let x = 0; x < canvasWidth; x += 1)
        {
            let y = amplitude * Math.cos(frequency * x + xOffset) + yOffset;
            context.lineTo(x, y);
        }
        context.stroke();
    }

    function animateCosineWave(context)
    {
        xOffset += 0.1;

        drawCosineWaves(context);

        requestAnimationFrame(function()
        {
            animateCosineWave(context);
        });
    }

    function generateCosineWaveWithMotion()
    {
        let context = createCanvas();
        animateCosineWave(context);
    }

    generateCosineWaveWithMotion();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

