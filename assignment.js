/*
//Task 1: A Program to convert kilometer to meter.

function kilometerToMeter(kiloMeter){
    var meter;
    meter = kiloMeter * 1000;   // 1 kilometer = 1000 meter.
    return meter;
}

var result1 = kilometerToMeter(15);
console.log(result1);
*/




/*


// Task 2: Budget Calculator

function budgetCalculator(watchCount, phoneCount, laptopCount){

    // If any of the product Count values is negative then the function returns an error message.

    if((watchCount < 0) || (phoneCount < 0) || (laptopCount < 0)){
        return "Error! Product count is not considered a negative value. Please give a positive product count.";
    }

    var watchUnitPrice = 50;
    var totalWatchPrice = watchCount * watchUnitPrice;

    var phoneUnitPrice = 100;
    var totalPhonePrice = phoneCount * phoneUnitPrice;

    var laptopUnitPrice  = 500;
    var totalLaptopPrice = laptopCount * laptopUnitPrice;

    var totalBudget = totalWatchPrice + totalPhonePrice + totalLaptopPrice;

    return totalBudget;
}

var result2 = budgetCalculator(10,10,10);
console.log(result2);

*/






