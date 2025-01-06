javascript:(
/* Array_of_Objects_Calculate_Sales_Total.js */
function()
{
    let products = [
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
    }
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

    function formatTotalSales(totalSales)
    {
        return "Total Sales: $" + totalSales.toFixed(2);
    }

    function calculateSalesTotal()
    {
        let totalSales = calculateTotalSales(products);

        return formatTotalSales(totalSales);
    }

    console.log(calculateSalesTotal());

    alert(calculateSalesTotal());

}());

/* Dedicated to God the Father */
/* All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025 */
/* https://github.com/ChristopherTopalian */
/* https://github.com/ChristopherAndrewTopalian */
/* https://sites.google.com/view/CollegeOfScripting */

