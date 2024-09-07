// TASK 1 - Create a Function to Calculate Average Sales:

let salesData = [12000, 15000, 13000]; //Dataset 

function calculateAverageSales(salesData) {
    const sumSales = salesData.reduce((sum, sales) => sum + sales, 0); 
    //implemented reduce method to capture data from salesData(array) into a single number (sum)
    const averageSales = sumSales / salesData.length; 
    //calculation of average sales data by dividing sum of sales and the sales data
    return averageSales;
    //returning the value output of averagesales
}
 
let average = calculateAverageSales(salesData) 
//applied function to salesData
console.log(`The average sales are $${average}`) 
//output = The average sales are $13333.333333333334



