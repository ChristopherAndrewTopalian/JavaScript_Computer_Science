javascript:(
/* Create_Video_Game_Player_on_Any_Webpage.js */
function()
{
    function createPlayer()
    {
        let player = document.createElement("div");
        player.id = "thePlayer";
        player.style.position = "absolute";
        player.style.left = 0;
        player.style.top = 0;
        player.style.width = "50px";
        player.style.height = "50px";
        player.style.zIndex = "15";
        player.style.fontFamily = "exo";
        player.style.fontSize = "20px";
        player.style.fontWeight = "bold";
        player.style.color = "rgb(255, 255, 255)";
        player.style.textAlign = "center";
        player.style.background = "rgba(76, 175, 180, 0.5)";
        document.body.append(player);

        /*-*/

        /* keyboard Letter Codes Being Pressed */
        let keyboard = {};
        keyboard.UP = 87;
        keyboard.DOWN = 83;
        keyboard.LEFT = 65;
        keyboard.RIGHT = 68;

        /*-*/

        /* player's start position and id */
        let ourPlayer =
        {
            x: 100,
            y: 300,
            speedMultiplier: 2,
            playerId: document.getElementById("thePlayer")
        };

        /*-*/

        /* key press detection */
        document.body.onkeyup = document.body.onkeydown = function(e)
        {
            if (e.keyCode == 80) /* letter p */
            {
                ourPlayer.playerId.style.background = "rgba(0, 175, 80, 0.5)";
                ourPlayer.speedMultiplier = 4;
            }
            if (e.keyCode == 79) /* letter o */
            {
                ourPlayer.playerId.style.background = "rgba(76, 0, 80, 0.5)";
                ourPlayer.speedMultiplier = 3;
            }
            if (e.keyCode == 73) /* letter i */
            {
                ourPlayer.playerId.style.background = "rgba(76, 175, 180, 0.5)";
                ourPlayer.speedMultiplier = 2;
            }

            /* find out which key was pressed */
            let theKeyCode = e.keyCode || e.which;

            keyboard[theKeyCode] = e.type == 'keydown';
        };

        /*-*/

        /* character movement updating */
        let movePlayer = function(theX, theY)
        {
            ourPlayer.x += (theX || 0) * ourPlayer.speedMultiplier;

            ourPlayer.y += (theY || 0) * ourPlayer.speedMultiplier;

            ourPlayer.playerId.style.left = ourPlayer.x + 'px';

            ourPlayer.playerId.style.top = ourPlayer.y + 'px';
        };

        /*-*/

        /* player controls */
        let sensePlayerMotion = function()
        {
            if (keyboard[keyboard.LEFT])
            {
                movePlayer(-1, 0);
            }
            if (keyboard[keyboard.RIGHT])
            {
                movePlayer(1, 0);
            }
            if (keyboard[keyboard.UP])
            {
                movePlayer(0, -1);
            }
            if (keyboard[keyboard.DOWN])
            {
                movePlayer(0, 1);
            }
        };

        /*-*/

        /* update Position of player */
        movePlayer();

        /*-*/

        function scrollIt()
        {
            document.getElementById("thePlayer").scrollIntoView(
            {
                block: "center",
                inline: "center"
            });
        }

        let loop001;

        function gameLoop()
        {
            sensePlayerMotion();

            scrollIt();

            loop001 = requestAnimationFrame(gameLoop);
        }

        gameLoop();

    }

    createPlayer();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

