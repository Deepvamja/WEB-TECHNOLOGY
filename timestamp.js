const TimeStampAreOnSameDay = (d1, d2) =>
        d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
   
    // To set two dates to two variables 
    var d1 = new Date(2020, 4, 20, 16, 4, 55); 
    var d2 = new Date(2020, 4, 20, 10, 22, 42);
 
    var result = TimeStampAreOnSameDay(d1 , d2); 
   
    //To display the final result
    if (result === true)
        document.write("Time Stamp " + d1 + " and "
                       + d2 + " is of same day.");
   else
    document.write("Time Stamp " + d1 + " and "
                       + d2 + " is of different day.");