//Dean Louis T. Santos CS-302
const time_element = document.getElementsByClassName("time")[0];
const seconds_element = document.getElementsByClassName("seconds")[0];
const meridian_element = document.getElementsByClassName("meridian")[0];
//Time gets updated every second(1000 millisecond = 1 second).
setInterval(
    function(){
    const date = new Date();//new date object is created to get the current time and date;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const hours_12_hour_format  = (date.getHours() % 12 || 12).toString().padStart(2, '0');
    const meridian = date.getHours() >= 12 ? 'PM' : 'AM';//determines if meridian is AM or PM
    //displays time in 12 hour format.
    time_element.innerHTML = hours_12_hour_format + "" +":"+ "" + minutes; 
    //displays seconds.
    seconds_element.innerHTML = date.getSeconds().toString().padStart(2, '0');   
    //displays meridian. 
    meridian_element.innerHTML = meridian;
},1000);

//resources used:
//https://www.w3schools.com/js/
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
//https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format#:~:text=var%20now%20%3D%20new%20Date()%3B,with%2012%20instead%20of%200.
//https://www.w3schools.com/jsref/jsref_string_padstart.asp


