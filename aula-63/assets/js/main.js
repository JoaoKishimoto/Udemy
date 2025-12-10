const chronometer = document.getElementById('chronometer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
let ms = 0;
let stopMs = 0;
let start;
let intervalId;

startButton.addEventListener('click', function(e) {
    chronometer.classList = 'started';
    start = Date.now();
    intervalId = setInterval(() => {
        ms = stopMs + Date.now() - start;
        refreshCount();
    }, 1);
});

stopButton.addEventListener('click', function(e) {
    if(chronometer.classList == 'started'){
        stopMs += Date.now() - start;
        ms = 0;
        chronometer.classList = 'stopped';
        clearInterval(intervalId);
    }
});

resetButton.addEventListener('click', function(e) {
    chronometer.classList = '';
    clearInterval(intervalId);
    ms = 0;
    stopMs = 0;
    refreshCount();
});

function refreshCount(){
    timeMs = String(ms%1000).padStart(3, '0');
    timeS = String(Math.floor(ms/1000)%60).padStart(2, '0');
    timeM = String(Math.floor(ms/60000)%60).padStart(2, '0');
    timeH = String(Math.floor(ms/3600000)%24).padStart(2, '0');
    chronometer.innerHTML = `${timeH}:${timeM}:${timeS}:${timeMs}`;
}