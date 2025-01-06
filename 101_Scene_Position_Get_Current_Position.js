javascript:(
/* Scene_Position_Get_Current_Position.js
*/
function()
{
    let horizon = document.createElement('div');
    horizon.style.position = 'absolute';
    horizon.style.left = '0px';
    horizon.style.top = '0px';
    horizon.style.width = '100%';
    horizon.style.height = '50%';
    horizon.style.backgroundColor = 'rgb(0, 100, 200)';
    document.body.append(horizon);

    /*-*/

    let grass = document.createElement('div');
    grass.style.position = 'absolute';
    grass.style.left = '0px';
    grass.style.bottom = '0px';
    grass.style.width = '100%';
    grass.style.height = '50%';
    grass.style.backgroundColor = 'rgb(0, 120, 0)';
    document.body.append(grass);

    /*-*/

    let road = document.createElement('div');
    road.style.position = 'absolute';
    road.style.left = '30%';
    road.style.bottom = '0%';
    road.style.width = '20%';
    road.style.height = '100%';
    road.style.clipPath = 'polygon(0 100%, 50% 50%, 100% 100%)';
    road.style.backgroundColor = 'rgb(0, 20, 0)'; 
    document.body.append(road);

    /*-*/

    let object001 = document.createElement('div');
    object001.style.position = 'absolute';
    object001.style.left = '400px';
    object001.style.top = '500px';
    object001.style.width = '20px';
    object001.style.height = '20px';
    object001.style.backgroundColor = 'tan';
    object001.style.cursor = 'pointer';
    object001.style.zIndex = '10000';

    object001.onclick = function(event)
    {
        /* get position */
        let objectRect = object001.getBoundingClientRect();

        console.log('X: ' + objectRect.x + ', Y: ' + objectRect.y);

        alert('X: ' + objectRect.x + ', Y: ' + objectRect.y);
    };

    document.body.append(object001);

    /*-*/

    let sun = document.createElement('div');
    sun.style.position = 'absolute';
    sun.style.left = '300px';
    sun.style.bottom = '400px';
    sun.style.width = '100px';
    sun.style.height = '100px';
    sun.style.borderRadius = "50%";
    sun.style.backgroundColor = 'yellow';
    sun.style.cursor = 'pointer';
    sun.style.zIndex = '10000';
    document.body.append(sun);

}());

/* Scene - Position - Get Current Position of the square object by left clicking it */

/*
Result:
X: 400, Y: 500
*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

