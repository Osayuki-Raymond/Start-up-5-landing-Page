// COUNTDOWN DATE
var countDownDate = new Date("July 18, 2022 00:01:0").getTime();

var myFunction = setInterval(function(){

    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    // CALCULATING THE DAYS, HOURS, MIN, SEC
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // PUSH TO SPECIFIC HTML TAG
    document.getElementById("days").innerHTML = days + "d"
    document.getElementById("hours").innerHTML = hours + "hrs" 
    document.getElementById("mins").innerHTML = minutes + "min" 
    document.getElementById("seconds").innerHTML = seconds + "s"

    // WHEN COUNTDOWN IS OVER
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = "" 
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
    }
}, 1000);