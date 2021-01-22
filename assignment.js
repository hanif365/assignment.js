

//=======================> Start of Task 1: A Program to convert kilometer to meter.<=========================


function kilometerToMeter(kiloMeter){

    // If kilometer value is negative then function return an error message.
    if(kiloMeter < 0){
        return "Error! The kilometer value can not be negative. Please give a positive value of kilometer."
    }
    var meter;
    meter = kiloMeter * 1000;   // We know, 1 kilometer = 1000 meter.
    return meter;
}


//============================================> End of Task 1 <===============================================




//=================================> Start of  Task 2: Budget Calculator <====================================


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


//==========================================> End of Task 2 <===============================================




//=============================> Start of Task 3: Calculate total hotel cost. <=============================


function hotelCost(dayCount){
    if(dayCount<0){
        return "Error! Day Count can not be a negative value. Please give a positive value. E.g., 25"
    }
    else if(dayCount<=10){
        var costWithNoDiscount = dayCount * 100;
        var totalCost = costWithNoDiscount;
        return totalCost;
    }
    else if(dayCount<=20){
        var costWithNoDiscount = 10 * 100;
        var remainingDay = dayCount - 10;
        var costWithMiniDiscount = remainingDay * 80;
        var totalCost = costWithNoDiscount + costWithMiniDiscount;
        return totalCost;
    }
    else{
        var costWithNoDiscount = 10 * 100;
        var costWithMiniDiscount = 10 * 80;
        var remainingDay = dayCount - 20;
        var costWithMegaDiscount = remainingDay * 50;
        var totalCost = costWithNoDiscount + costWithMiniDiscount + costWithMegaDiscount;
        return totalCost;
    }
}


//===========================================> End of Task 3 <================================================





//===================> Start of Task 4: Find longest friend name(longest string) in an array. <==================



function megaFriend(friendNameArray) {

    var longestString = friendNameArray[0];

     /* Iteration(i) begins from 1 because first array value store in above longestString variable 
     and at first we consider first array value is the longest string and then comparing it other's array values.
    If any other array value's length is greater than longestString length then that array element will assign into longestString variable. */

    for (var i = 1; i < friendNameArray.length; i++) {
        if (friendNameArray[i].length > longestString.length) {
            longestString = friendNameArray[i];
        }
    }

    // If all string length are zero then return an error message.
    // E.g., var longestname = megaFriend(["","",""]);

    if (longestString.length == 0) {
        return "Error! All of the strings are empty!.";
    }
    else {
        return longestString;
    }

}


//===========================================> End of Task 4 <================================================
