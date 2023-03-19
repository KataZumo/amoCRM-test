//Variables
const startButton = document.querySelector('.stopwatch__start');
const stopButton = document.querySelector('.stopwatch__stop');
const resetButton = document.querySelector('.stopwatch__reset');
const hourElement = document.getElementById("hour");
const minElement = document.getElementById("minute");
const secElement = document.getElementById("seconde");
let Interval;

//Events
eventListners();
function eventListners() {
    if (resetButton) {
        resetButton.addEventListener('click', resetWatch);
    }
    if (startButton) {
        startButton.addEventListener('click', startWatch);
    }

    if (stopButton) {
        stopButton.addEventListener('click', stopWatch);
    }
}

//Functions
function resetWatch() {
    hourElement.innerHTML = '00';
    minElement.innerHTML = '00';
    secElement.innerHTML = '00';
    stopWatch();
}

function startWatch() {
    let seconde = parseInt(secElement.textContent.trim());
    Interval = setInterval(() => {
        seconde += 1;
        if(seconde == 60){
            seconde = 0;
            let minute = parseInt(minElement.textContent.trim());
            minute++;
            if(minute == 60){
                minute = 0;
                let hour = parseInt(hourElement.textContent.trim());
                hour++;
                if(hour == 24){
                    hour = 0;
                }
                if (hour < 10) {
                    hourElement.innerHTML = "0" + hour;
                }
                else {
                    hourElement.innerHTML = hour;
                }    
            }
            if (minute < 10) {
                minElement.innerHTML = "0" + minute;
            }
            else {
                minElement.innerHTML = minute;
            }    
        }
        if (seconde < 10) {
            secElement.innerHTML = "0" + seconde;
        }
        else {
            secElement.innerHTML = seconde;
        }

    }, 1000);
}

function stopWatch() {
    if (Interval) {
        clearInterval(Interval);
    }
}