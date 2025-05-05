javascript:(
/* input_download.js */
function()
{
    function makePlayerInput()
    {
        let playerContainer = document.createElement('div');
        playerContainer.style.position = 'fixed';
        playerContainer.style.marginLeft = '50%';
        playerContainer.style.marginRight = '50%';
        playerContainer.style.display = 'flex';
        playerContainer.style.flexDirection = 'row';
        playerContainer.style.top = 5 + 'px';
        document.body.append(playerContainer);

        //-//

        let playerInput = document.createElement('input');
        playerInput.id = 'playerInput';
        playerInput.type = 'number';
        playerInput.min = 1;
        playerInput.max = 5;
        playerContainer.append(playerInput);

        //-//

        let sendButton = document.createElement('button');
        sendButton.textContent = 'Send';
        sendButton.onclick = function()
        {
            let value = document.getElementById('playerInput').value;

            let jsContent = 'let numberOfPlayers = ' + value + ';';

            let blob = new Blob([jsContent], { type: 'text/javascript' });

            let url = URL.createObjectURL(blob);

            let theAnchor = document.createElement('a');
            theAnchor.href = url;
            theAnchor.download = 'numberOfPlayers.js';
            document.body.append(theAnchor);
            theAnchor.click();

            setTimeout(function()
            {
                URL.revokeObjectURL(url);
                theAnchor.remove();
            }, 100);
        };
        playerContainer.append(sendButton);
    }

    makePlayerInput();
}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

