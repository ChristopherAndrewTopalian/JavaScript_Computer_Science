javascript:(
/* Array_of_Objects_Count_occurrences_of_each_item.js */
function()
{
    let food =
    [
        {
            name: "Apple",
            quantity: 3
        },

        {
            name: "Banana",
            quantity: 2
        },

        {
            name: "Strawberry",
            quantity: 4
        },

        {
            name: "Apple",
            quantity: 2
        },

        {
            name: "Pear",
            quantity: 3
        },

        {
            name: "Banana",
            quantity: 1
        },
    ];

    function countItemOccurrences(whichArray)
    {
        let itemCounts = {};

        for (let x = 0; x < whichArray.length; x++)
        {
            let itemName = whichArray[x].name;

            if (itemCounts[itemName])
            {
                itemCounts[itemName] += whichArray[x].quantity;
            }
            else
            {
                itemCounts[itemName] = whichArray[x].quantity;
            }
        }
        return itemCounts;
    }

    /* count the occurrences of each item */
    let itemOccurrences = countItemOccurrences(whichArray);

    /* display the results */
    let message = "Item Occurrences:\n\n";

    let itemKeys = Object.keys(itemOccurrences);

    for (let x = 0; x < itemKeys.length; x++)
    {
        let item = itemKeys[x];

        message += item + ": " + itemOccurrences[item] + "\n";
    }

    console.log(message);

    alert(message);

}());

/*

Item Occurrences:

Apple: 5
Banana: 3
Strawberry: 4
Pear: 3

*/

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

