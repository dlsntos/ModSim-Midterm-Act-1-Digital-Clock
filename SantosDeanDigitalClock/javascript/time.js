//Dean Louis T. Santos CS-302
//references the classes.
let show_hour = document.getElementsByClassName("hour")[0];
let show_minute = document.getElementsByClassName("minutes")[0];
let show_seconds = document.getElementsByClassName("seconds")[0];
let am_pm = document.getElementsByClassName("AM-PM")[0];

//in each function a new date object is created to get today's time and date;
//The .innerHTML updates the contents of the referenced HTML element.
function seconds(){
    let date = new Date();
    show_seconds.innerHTML = date.getSeconds();
}
function hours(){
    let date = new Date();
    let hours  = (date.getHours() % 12 || 12).toString().padStart(2, '0');//converts the 24 hour format to 12 hour format.
    show_hour.innerHTML = hours;                                          //the .toString() converts it to string.
                                                                          //the padStart(2,'0') pads the string with 0 if it reaches the length of 2 with a empty space.
}
function minutes(){
    let date = new Date();
    show_minute.innerHTML = date.getMinutes().toString().padStart(2, '0');
}
function am_or_pm(){
    let date = new Date();
    let hours = date.getHours();
    //if hours is between 12 and 24 hours it will be PM otherwise it is AM.
    if(hours >= 12 && hours < 24){
        am_pm.innerHTML = "PM";
    } else{
        am_pm.innerHTML = "AM";
    }
}
//Time gets updated every second(1000 millisecond = 1 second).
setInterval(am_or_pm, 1000);
setInterval(seconds,1000);
setInterval(hours,1000);
setInterval(minutes,1000);

//resources used:
//https://www.w3schools.com/js/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format#:~:text=var%20now%20%3D%20new%20Date()%3B,with%2012%20instead%20of%200.
//https://www.w3schools.com/jsref/jsref_string_padstart.asp


