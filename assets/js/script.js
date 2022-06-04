var currentDayEl = document.querySelector("#currentDay");


//get users current date and then create arrays pertaining to the days and month of a year
var displayDate = function(){
    var todaysDate = new Date();
    var months = ["January","Febuary","March","April","May","June","July","August","September","October","November","December"];
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var currentDay = todaysDate.getDay();
    var currentMonth = todaysDate.getMonth();
    var currentDate = todaysDate.getDate();
    var dateSuffix = "";

    //shows a simpler way than what I originally was going to do to get the suffix of a date
    //https://stackoverflow.com/questions/15397372/javascript-new-date-ordinal-st-nd-rd-th
    var addSuffix = function(currentDate) {
        if (currentDate > 3 && currentDate < 21) dateSuffix = 'th';
        switch (currentDate % 10) {
          case 1:  dateSuffix = "st"; console.log(1);
          case 2:  dateSuffix = "nd"; console.log(2);
          case 3:  dateSuffix = "rd"; console.log(3);
          default: dateSuffix = "th"; console.log(4);
        }
      }
    
    addSuffix(currentDate);
    currentDayEl.textContent = days[currentDay] + ", " + months[currentMonth] + " " + currentDate + dateSuffix;
}


//Display the current Date to the screen
displayDate();