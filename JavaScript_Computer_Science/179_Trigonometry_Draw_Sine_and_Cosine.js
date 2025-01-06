javascript:(
/* Trigonometry_Draw_Sine_and_Cosine.js */
function()
{
    function graphSineAndCosine()
    {
        let canvas = document.createElement("canvas");
        canvas.style.position = "absolute";
        canvas.style.left = 100 + "px";
        canvas.style.top = 50 + "px";
        canvas.width = 700;
        canvas.height = 500;

        /*-*/

        let context = canvas.getContext("2d");

        /* clear the canvas */
        context.clearRect(0, 0, canvas.width, 
        canvas.height);

        /* draw x and y axes */
        context.beginPath();
        context.moveTo(0, canvas.height / 2);
        context.lineTo(canvas.width,     
        canvas.height / 2);
        context.moveTo(canvas.width / 2, 0);
        context.lineTo(canvas.width / 2,         
        canvas.height);
        context.strokeStyle = "black";
        context.stroke();
        context.closePath();

        /* draw sine function */
        context.beginPath();
        context.moveTo(0, canvas.height / 2);

        for (let x = 0; x < canvas.width; x++)
        {
            let radians = (x - canvas.width / 2) * (Math.PI / 180);

            let y = Math.sin(radians) * (canvas.height / 4) + (canvas.height / 2);

            context.lineTo(x, y);
        }

        context.strokeStyle = "blue";
        context.lineWidth = 4;
        context.stroke();
        context.closePath();

        /* draw cosine function */
        context.beginPath();
        context.moveTo(0, canvas.height / 2);

        for (let x = 0; x < canvas.width; x++)
        {
            let radians = (x - canvas.width / 2) * (Math.PI / 180);

            let y = Math.cos(radians) * (canvas.height / 4) + (canvas.height / 2);

            context.lineTo(x, y);
        }

        context.strokeStyle = "red";
        context.lineWidth = 4;
        context.stroke();
        context.closePath();

        document.body.append(canvas);
    }

    graphSineAndCosine();

}());

/*
creates a dynamic trigonometric graph using canvas to draw the sine and cosine functions
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

