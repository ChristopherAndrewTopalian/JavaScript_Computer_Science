javascript:(
/* Trigonometry_Tangent_Wave_Motion.js */
function()
{
    function generateTangentWaveWithMotion()
    {
        let amplitude = 50;
        let frequency = 0.05;

        let xOffset = 0;
        let yOffset = 100;

        let canvasWidth = window.innerWidth;
        let canvasHeight = 200;

        /*-*/

        let canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.left = '0';
        canvas.style.top = '0';
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.zIndex = '10000';
        canvas.style.pointerEvents = 'none';
        document.body.append(canvas);

        /*-*/

        let context = canvas.getContext('2d');

        /*-*/

        function drawTangentWave()
        {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();

            for (let x = 0; x < canvasWidth; x += 1)
            {
                let y = amplitude * Math.tan(frequency * x + xOffset) + yOffset;
                context.lineTo(x, y);
            }

            context.strokeStyle = 'green';
            context.lineWidth = 2;
            context.stroke();
        }

        function animate()
        {
            xOffset += 0.1;
            drawTangentWave();
            requestAnimationFrame(animate);
        }

        animate();
    }

    generateTangentWaveWithMotion();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

