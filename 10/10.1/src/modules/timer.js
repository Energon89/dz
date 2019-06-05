const htmlElements = { 
    output: document.querySelector('.container [data-mode="timer"] .output'),
    buttons: document.querySelectorAll('.container [data-mode="timer"] .buttons button')
};


let isRunning = false;
let time, hours, minutes, seconds;
let startTime = 300;

function Timer() {};
  
Timer.prototype.init = function() {
    htmlElements.buttons.forEach(function(button) {
        button.addEventListener('click', function() {buttonClicked(this.dataset.mode);});
    });
  };

  function buttonClicked (mode){
    switch (mode) {
        case 'start':
        if(!isRunning){
        isRunning = true;
        startTimer(startTime);}
        break;
        case 'stop':
        clearInterval(time);
        isRunning = false;
        break;
        case 'reset':
        clearInterval(time);
        isRunning = false;
        startTime = 300;
        htmlElements.output.innerText = '00:05:00';
    }
};

function startTimer(duration) {
    if (isRunning) {
    const start = Date.now(); 
    let diff;

    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        hours = (diff/3600) | 0;
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;
        startTime = hours*3600 + minutes*60 + seconds;

        hours = hours <10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        htmlElements.output.innerText = `${hours}:${minutes}:${seconds}`;

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    time = setInterval(timer, 1000);}
}

export { Timer };
