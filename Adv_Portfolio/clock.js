function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }
    else{
        session.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }

    document.getElementById('hrs'). innerHTML = hrs;
    document.getElementById('mins'). innerHTML = min;
    document.getElementById('secs'). innerHTML = sec;
}
setInterval(displayTime, 10)