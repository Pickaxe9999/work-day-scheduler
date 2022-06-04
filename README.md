# Work Day Scheduler Starter Code
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist


Branch Breakdown
-feature/display-day
grab the current days date

-feature/display-business-hours
dynamically create the elements to hold each hours work description

-feature/update-present-color
change the background color of the hours based on the current hour

-feature/save-events
save the current tasks descriptions to local storage

-feature/persistant-events
be able to retrive text description for each hour based on if saved data is availible from local storage