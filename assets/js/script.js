var currentDayEl = document.querySelector("#currentDay");
var timeBlocksContantainerEl = document.querySelector(".container");
var timeBlockArr = [];

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
          case 1:  dateSuffix = "st";
          case 2:  dateSuffix = "nd";
          case 3:  dateSuffix = "rd";
          default: dateSuffix = "th";
        }
      }
    
    addSuffix(currentDate);
    currentDayEl.textContent = days[currentDay] + ", " + months[currentMonth] + " " + currentDate + dateSuffix;
}

//creates a single block for holding an hour some text and a save button
var createTimeBlock = function(timeString, timeId){
    //create the container to hold all hours of the workday
    var timeContainerEl = document.createElement("div");
    timeContainerEl.className = "container";

    //create the container to hold each individual hour
    var timeBlock = document.createElement("div");
    timeBlock.className = "row";
    
    //create the time shown for each hour
    var time = document.createElement("div");
    time.className = "col hour";
    time.textContent = timeString;
    timeBlock.appendChild(time);

    //create the area users can type in their tasks
    var textDescirption = document.createElement("input");
    textDescirption.className = "col-8 textarea description";
    textDescirption.type = "text";
    textDescirption.setAttribute("id", timeId)
    timeBlock.appendChild(textDescirption);

    //create the save Btn to save text
    var saveBtnEl = document.createElement("button");
    saveBtnEl.className = "col saveBtn";

    var saveBtnIcon = document.createElement("i");
    saveBtnIcon.className = "fas fa-save";
    saveBtnEl.appendChild(saveBtnIcon);

    timeBlock.appendChild(saveBtnEl);


    //add everything to the webpage
    timeBlocksContantainerEl.appendChild(timeBlock);
}

//creates the days work table
var createWorkDayTable = function(){
    for(var i = 0; i < 9; i++){
        var timeString = "";
        var time = i;
        if(i <= 3){
            time = time + 9;
            timeString = time + "am";
            createTimeBlock(timeString , time);
        }else{
            time = time + 9 - 12;
            timeString = time + "pm";
            createTimeBlock(timeString, time+12);
        }
    }
}

//audit each task to see if it need to be flagged in a different color
var auditTasks = function(){
    var timeBlocks = $(".textarea");
    var time = new Date();
    currentHour = time.getHours();
    for(var i = 0; i < timeBlocks.length; i++){
        var className = "col-8 textarea description";
        if(timeBlocks[i].id < currentHour){
            className = className + " bg-secondary";
            timeBlocks[i].className = className;
        }else if(timeBlocks[i].id == currentHour){
            className = className + " bg-danger";
            timeBlocks[i].className = className;
        }else{
            className = className + " bg-success";
            timeBlocks[i].className = className;
        }
    }
}


//Display the current Date to the screen
displayDate();

//create the time blocks
createWorkDayTable();

//audit tasks when page is first loaded
auditTasks();

//audit each time block if its in the past, present, of future every 15 minutes
setInterval(function() {
    auditTasks();
}, 900000);