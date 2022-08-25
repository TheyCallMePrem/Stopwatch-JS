//alert("hello");
// Variables for buttons

const startStopBtn = document.querySelector('#start-stop-btn');
const reset = document.querySelector('#reset-btn');


// Variables for timer


let seconds = 0;
let minutes = 0;
let hours = 0;
// Variables for leading 0

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;


// Variables for timer status and interval
let timerInterval = null;
let timerStatus = "Stopped";
// Stopwatch function


function stopwatch() {
    seconds++;

    if(seconds == 60){
        seconds =0;
        minutes++;
        if(minutes == 60){
            minutes =0;
            hours++;
        }
    }

    if(seconds <10){
        leadingSeconds ="0" +seconds.toString();
    }
    else{
        leadingSeconds = seconds;
    }
    if(minutes  <10){
        leadingMinutes  ="0" +minutes.toString();
    }
    else{
        leadingMinutes  = minutes;

    }
    if(hours  <10){
        leadingHours  = "0" + hours.toString();
    }
    else{
        leadingHours  = hours;
    }

    let displayTimer= document.getElementById("timer");
    displayTimer.style.fontFamily="'Playfair Display', serif" 
    displayTimer.style.fontSize="8em"
    //font-weight: 400;
    displayTimer.style.fontWeight="400";
    displayTimer.innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}
//alert("hello");
//window.setInterval(stopwatch, 100) // milliseconds

startStopBtn.addEventListener("click", function () {
    if (timerStatus=="Stopped"){
        timerInterval = window.setInterval(stopwatch, 1000);
        startStopBtn.innerText = "Stop";
        timerStatus ="Started";
        startStopBtn.style.boxShadow = "5px 2px 5px  var(--text-color)";
    }
    else{
        window.clearInterval(timerInterval);
        startStopBtn.innerText = "Start";
        timerStatus ="Stopped";
        startStopBtn.style.boxShadow = "0px 0px 0px  var(--text-color)";
    }
})

reset.addEventListener("click", function(e) {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    // reset.style.boxShadow = "5px 2px 5px  var(--text-color)";
    document.getElementById("timer").innerHTML = "00:00:00";
    document.getElementById("timer").style.fontSize="8em";
    document.getElementById("timer").fontFamily="'Playfair Display', serif";
    document.getElementById("timer").fontWeight="400";
    
    
    // document.querySelector('.container').style.backgroundColor = "black";
    // document.querySelector('.container').style.backgroundColor = "var(--secondary-color)";
})