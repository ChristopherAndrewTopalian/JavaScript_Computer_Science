javascript:(
/* Button_Beep_Sound_using_Oscillator.js */
function()
{
    let button = document.createElement('button');
    button.textContent = 'Click me for a beep';

    /* create a new AudioContext */
    let AudioContext = window.AudioContext || window.webkitAudioContext;

    let audioContext = new AudioContext();

    /* add click event to play beep sound */
    button.addEventListener('click', function()
    {
        /* create oscillator node for the beep sound */
        let oscillator = audioContext.createOscillator();

        oscillator.type = 'sine';

        /* frequency of the beep sound */
        oscillator.frequency.value = 1000;

        oscillator.connect(audioContext.destination);

        oscillator.start();

        setTimeout(function()
        {
            oscillator.stop();
        }, 100);
    });

    document.body.append(button);

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

