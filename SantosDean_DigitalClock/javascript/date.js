//Dean Louis T. Santos CS-302
const date_element = document.getElementsByClassName('date')[0];
const day_element = document.getElementsByClassName('day')[0];
//in each function a new date object is created to get the current time and date;
//The .innerHTML updates the contents of the referenced HTML element
setInterval(function(){
    const date = new Date();
    const monthNames = ["January", "February", "March", 
        "April", "May", "June","July", 
        "August", "September", "October", 
        "November", "December"];
    //uses the getMonth function as an index to get current month from the list.    
    const month = monthNames[date.getMonth()];
    //gets day in numerical form.
    const day = date.getUTCDate();
    const year = date.getFullYear();
    //concatenate the month, day, and year to form MM-DD-YYYY Date format.
    const date_today = month + " " + day + ", " + year;
    //displays full date.
    date_element.innerHTML = date_today;
},1000);
setInterval(function(){
    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", 
        "Thursday", "Friday", "Saturday"];

    const date = new Date();
    //uses the getDay function as an index to get current day from the list.
    const day_today = dayName[date.getDay()];
    //displays current day in text form.
    day_element.innerHTML = day_today;

},1000);

//resources used:
//https://www.w3schools.com/js/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date



