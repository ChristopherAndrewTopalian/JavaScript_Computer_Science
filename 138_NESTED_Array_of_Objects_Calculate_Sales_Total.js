javascript:(
/* Array_of_Objects_Calculate_Sales_Total.js */
function()
{
    function calculateSalesTotal()
    {
        let products =
        [
            {
                name: "Store A",
                sales: 250
            },
            {
                name: "Store B",
                sales: 180
            },
            {
                name: "Store C",
                sales: 320
            },
            {
                name: "Store D",
                sales: 420
            },
        ];

        function calculateTotalSales(salesData)
        {
            let total = 0;

            for (let x = 0; x < salesData.length; x++)
            {
                total += salesData[x].sales;
            }

            return total;
        }

        /* calculate the total sales */
        let totalSales = calculateTotalSales(products);

        return "Total Sales: $" + totalSales.toFixed(2);
    }

    /* display the result */
    console.log(calculateSalesTotal());

    alert(calculateSalesTotal());

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

