// TASK 1 - Create a Function to Calculate Average Sales:

let salesData = [12000, 15000, 13000]; //Dataset from data provided 

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



// TASK 2 - Create a Function to Determine Performance Rating:

function determinePerformanceRating(average) {
    if (average > 10000) 
        {return `Excellent`} //if average data is greater than 10000 return "excellent"
    else if (average >= 7000 && average <= 100000) 
        {return `Good`}  //if average data is between 10000 & 7000 return "good"
    else if (average >= 4000 && average <= 7000 ) 
        {return `Satisfactory`} //if average data is between 7000 & 4000 return "satisfactory"
    else (average <= 4000 )  
        {return `Needs Improvement`}; //if average data is less than 4000 return "needs improvement"
}
console.log (determinePerformanceRating(average)); //applied function to average sales 

