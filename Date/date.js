function showTime(){
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var session = "AM";
    
    
    if(hours==0){
        hours = 12; //12hr format
    }
    if(hours>12){
        hours = hours - 12; //12hr format
        session = "PM";
    };
    /*
    if(hours<10){
        hours = "0"+hours;
    };
    if(minutes<10){
        minutes="0"+minutes;
    };
    if(seconds<10){
        seconds="0"+seconds
    }
    */
    //using ternary operators imstead of the if else
    hours = (hours<10)?"0"+hours:hours;
    minutes = (minutes<10)?"0"+minutes:minutes;
    seconds  = (seconds<10)?"0"+seconds:seconds;

    document.getElementById("DigitalClock").innerHTML = hours + ":" + minutes + ":" + seconds + " " + session;

    var days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var current_weekDay = days[date.getDay()];
    var current_day = date.getDate();
    var current_month = months[date.getMonth()];
    var current_year = date.getFullYear();
    document.getElementById("Date").innerHTML = current_weekDay + " " + current_day + " " + current_month + " " + current_year
    setTimeout(showTime,1000);


};
showTime();