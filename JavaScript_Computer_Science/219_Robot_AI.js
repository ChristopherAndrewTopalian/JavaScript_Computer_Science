javascript:(
/* Robot_AI.js */
function()
{
    let mainDiv = document.createElement("div");
    mainDiv.style.position = "fixed";
    mainDiv.style.top = "0";
    mainDiv.style.right = "0";
    mainDiv.style.padding = "5px";
    mainDiv.style.backgroundColor = "rgb(0, 0, 0)";
    mainDiv.style.color = "rgb(255, 255, 255)";
    mainDiv.style.zIndex = "10000";
    document.body.append(mainDiv);

    /*-*/

    let userInput = document.createElement("input");
    userInput.type = "text";
    userInput.placeholder = "Type Words Here";
    userInput.style.width = "200px";
    userInput.style.paddingLeft = "10px";
    userInput.style.paddingRight = "10px";
    userInput.style.paddingTop = "4px";
    userInput.style.paddingBottom = "4px";
    mainDiv.append(userInput);

    /*-*/

    let sendButton = document.createElement("button");
    sendButton.textContent = "Send";
    mainDiv.append(sendButton);

    /*-*/

    /* if keyword is found, use these responses */
    let responses =
    [
        {
            keywords: ["hi", "howdy", "hey"],
            responses: ["Howdy", "Hi there", "Hi"]
        },
        {
            keywords: ["weather", "forecast", "sunny", "cloudy"],
            responses: ["It's a beautiful day.", "The weather is very nice.", "It's sunny and warm."]
        },
        {
            keywords: ["how are you", "what's up", "what are you up to?"],
            responses: ["I'm doing good, you?", "Having fun and you?", "I'm good, how about you?"]
        },
        {
            keywords: ["bye", "goodbye", "take care"],
            responses: ["Bye. Talk to you soon.", "Goodbye!", "Have fun."]
        },
        {
            keywords: ["interests", "career"],
            responses: ["Computer Science is fun.", "Programming is lots of fun.", "I like programming a lot."]
        }
    ];

    /*-*/

    /* if no keywords found, use these responses */
    let randomResponses =
    [
        "That's interesting!",
        "Would you tell me more?",
        "Hmm, tell me more about that.",
        "Would you elaborate?",
        "Interesting, please go on.",
        "Fascinating! Tell me more.",
    ];

    /*-*/

    let context = null;

    /* Enter key triggers a click on send button */
    userInput.onkeydown = function(event)
    {
        if (event.key === "Enter")
        {
            /* prevent default Enter key behavior */
            event.preventDefault();

            /* trigger a click on the send button */
            sendButton.click();
        }
    };

    /*-*/

    sendButton.onclick = function()
    {
        let userQuestion = userInput.value.trim();

        if (userQuestion)
        {
            let responseObj = responses.find(function(obj)
            {
                return obj.keywords.some(function (keyword)
                {
                    return userQuestion.toLowerCase().indexOf(keyword) !== -1;
                });
            });

            if (responseObj)
            {
                let randomIndex = Math.floor(Math.random() * responseObj.responses.length);

                alert(responseObj.responses[randomIndex]);

                if (responseObj.keywords.indexOf("bye") !== -1)
                {
                    context = null;
                }
                else
                {
                    context = responseObj.keywords;
                }
            }
            else
            {
                let result = calculate(userQuestion);

                if (result !== null)
                {
                    alert("The result is: " + result);
                }
                else
                {
                    let randomIndex = Math.floor(Math.random() * randomResponses.length);

                    alert(randomResponses[randomIndex]);
                }
            }

            userInput.value = "";
        }
    };

    function calculate(input)
    {
        try
        {
            return eval(input);
        }
        catch (error)
        {
            return null;
        }
    }

}());

/* Robot AI */
/*Textbox for Input with Send Button - Random Responses every time to keywords and phrases and variations of keywords and phrases found. Other random response when no keywords are found - and Calculations*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

