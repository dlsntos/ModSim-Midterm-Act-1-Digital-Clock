//Dean Louis T. Santos CS-302
//references the classes.
let show_date_today = document.getElementsByClassName('date')[0];
let show_day_today = document.getElementsByClassName('day')[0];
//in each function a new date object is created to get the current time and date;
//The .innerHTML updates the contents of the referenced HTML element
function show_full_date(){
    //list of months in name.
    const monthNames = ["January", "February", "March", 
                        "April", "May", "June","July", 
                        "August", "September", "October", 
                        "November", "December"];
    let date = new Date();
    //uses the monthNames list as index to show the month names.
    let month = monthNames[date.getMonth()];
    let day = date.getDay();
    let year = date.getFullYear();
    //concatenates the month,day, and year to form a full date format.
    let date_today = month.concat(" ",day," ",year);
    show_date_today.innerHTML = date_today;
}
function show_day_name(){
    //list of days in name.
    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", 
                    "Thursday", "Friday", "Saturday"];
    let date = new Date();
    //uses the dayName list as index to show the day names of the week.
    let day_today = dayName[date.getDay()];
    show_day_today.innerHTML = day_today;
}
//Date gets updated every second(1000 millisecond = 1 second).
setInterval(show_full_date,1000);
setInterval(show_day_name,1000);

//resources used:
//https://www.w3schools.com/js/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date



