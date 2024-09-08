// SALES DATA

const salesData = [
    { name: 'Alice', sales: [12000, 15000, 13000] },
    { name: 'Bob', sales: [7000, 6000, 7500] },
    { name: 'Charlie', sales: [3000, 4000, 3500] },   
    { name: 'Diana', sales: [9000, 8500, 9200] }
];


// TASK 1 - Create a Function to Calculate Average Sales:

let salesNumbers = [12000, 15000, 13000]; //Dataset from data provided 

function calculateAverageSales(salesNumbers) {
    const sumSales = salesNumbers.reduce((sum, sales) => sum + sales, 0); 
    //implemented reduce method to capture data from salesNumbers(array) into a single number (sum)

    const averageSales = sumSales / salesNumbers.length; 
    //calculation of average sales numbers by dividing sum of sales and the sales numbers

    return averageSales;
    //returning the value output of averagesales
};
 
let average = calculateAverageSales(salesNumbers);
//applied function to salesNumbers

console.log(`The average sales are $${average}.`);
//output = The average sales are $13333.333333333334




// TASK 2 - Create a Function to Determine Performance Rating:

function determinePerformanceRating(average) {
    if (average > 10000) 
        {return `Excellent`} //if average data is greater than 10000 return "excellent"
    else if (average >= 7000 && average <= 100000) 
        {return `Good`}  //if average data is between 10000 & 7000 return "good"
    else if (average >= 4000 && average <= 7000) 
        {return `Satisfactory`} //if average data is between 7000 & 4000 return "satisfactory"
    else (average <= 4000)  
        {return `Needs Improvement`}; //if average data is less than 4000 return "needs improvement"
};

let performanceRating = (determinePerformanceRating(average));
//applied function to average sales

console.log (performanceRating) 
//output = Excellent 




// TASK 3 - Create a Function to Identify Top and Bottom Performers:

function findTopAndBottomPerformers(salesData) {
    //first calculating total sales of the sales data
    const totalSales = salesData.map(salesPerson => ({ //using map method to create a new array 
        name: salesPerson.name, //identifying sales person throught the data set array
        totalSales: salesPerson.sales.reduce((sum, sale) => sum + sale, 0)
        //using reduce method to calculate total sales 
    }));

    const maxSales = Math.max(...totalSales.map(salesPerson => salesPerson.totalSales));
    //using the Math.max method to identify sales person with the most sales

    const minSales = Math.min(...totalSales.map(salesPerson => salesPerson.totalSales));
    //using the Math.min to identify sales person with the least sales 

    return {
        topPerformer: totalSales.find(salesPerson => salesPerson.totalSales === maxSales),
        //returning the max sales as top performer
        bottomPerformer: totalSales.find(salesPerson => salesPerson.totalSales === minSales)
        //returning the min sales as bottom performer
    };

};

let topBottomPerformers = findTopAndBottomPerformers(salesData);
//applying the function to the sales data

console.log("Top Performer:", topBottomPerformers.topPerformer);
//output = Top Performer: {name: 'Alice', totalSales: 40000}

console.log("Bottom Performer:", topBottomPerformers.bottomPerformer);
//output = Bottom Performer: {name: 'Charlie', totalSales: 10500}



// TASK 4 - Combine Functions to Generate a Performance Report:

function generatePerformanceReport(salesData) {
    //first creating function to capture data from salesData

    const report = salesData.map(salesPerson => {
        //using the map method to capture data from each sales person

        const average = calculateAverageSales(salesPerson.sales);
        //calling average function to calculate the average

        const performanceRating = determinePerformanceRating(average);
        return{
            //assigning a rating to each sales person in the data array 

            name: salesPerson.name, //naming each sales person
            average, //average that was calculated before
            performanceRating, //assigning performance rating 
        }
    });

    const  topBottomPerformers = findTopAndBottomPerformers(salesData);
        //calling the top/bottom function to apply it to the salesdata array

        return {
            report, //returning report
            topPerformer: topBottomPerformers.topPerformer,
            bottomPerformer: topBottomPerformers.bottomPerformer
}};


let performanceReport = generatePerformanceReport(salesData);
//applied function to salesData

console.log("Performance Report:", performanceReport.report);

//output =
//{name: 'Alice', average: 13333.333333333334, performanceRating: 'Excellent'}
//{name: 'Bob', average: 6833.333333333333, performanceRating: 'Satisfactory'}
//{name: 'Charlie', average: 3500, performanceRating: 'Needs Improvement'}
//{name: 'Diana', average: 8900, performanceRating: 'Good'}

console.log("Top Performer:", performanceReport.topPerformer);
//output = Top Performer: {name: 'Alice', totalSales: 40000}

console.log("Bottom Performer:", performanceReport.bottomPerformer);
//output = Bottom Performer: {name: 'Charlie', totalSales: 10500}

