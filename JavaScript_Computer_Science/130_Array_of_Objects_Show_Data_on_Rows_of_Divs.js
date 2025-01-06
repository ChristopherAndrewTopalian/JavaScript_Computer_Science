javascript:(
/* Array_of_Objects_Show_Data_on_Rows_of_Divs.js */
function()
{
    function showData()
    {
        let data =
        [
            {
                name: 'Item 1',
                description: 'Description 1'
            },

            {
                name: 'Item 2',
                description: 'Description 2'
            },

            {
                name: 'Item 3',
                description: 'Description 3'
            },

            {
                name: 'Item 4',
                description: 'Description 4'
            },

            {
                name: 'Item 5',
                description: 'Description 5'
            },

            {
                name: 'Item 6',
                description: 'Description 6'
            },

            {
                name: 'Item 7',
                description: 'Description 7'
            },

            {
                name: 'Item 8',
                description: 'Description 8'
            },

            {
                name: 'Item 9',
                description: 'Description 9'
            },
        ];

        /* create a container for the rows of divs */
        let container = document.createElement('div');
        container.style.position = "absolute";
        container.style.left = 10 + "px";
        container.style.top = 10 + "px";
        container.style.maxWidth = '800px';
        container.style.padding = '10px';
        container.style.display = 'flex';
        container.style.flexWrap = 'wrap';
        container.style.justifyContent = 'space-between';
        document.body.append(container);

        function createDivForObject(object)
        {
            let dataDiv = document.createElement('div');
            dataDiv.style.width = '30%';
            dataDiv.style.paddingLeft = '10px';
            dataDiv.style.paddingRight = '10px';
            dataDiv.style.paddingBottom = '5px';
            dataDiv.style.marginLeft = '1px';
            dataDiv.style.marginRight = '1px';
            dataDiv.style.marginBottom = '7px';
            dataDiv.style.marginTop = '7px';
            dataDiv.style.border = '1px solid';
            dataDiv.style.borderColor = 'rgb(255, 255, 255)';

            dataDiv.innerHTML = '<h3>' + object.name + '</h3>' + '<p>' + object.description + '</p>';

            container.append(dataDiv);
        }

        for (let x = 0; x < data.length; x++)
        {
            createDivForObject(data[x]);
        }
    }

    showData();

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

