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
        resetTimer();
        htmlElements.output.innerText = '00:05:00';
        break;
    }
};

function startTimer(duration) {
    let start = new Date().getTime();

    time = setInterval(function() {

        const diff = duration - Math.round((new Date().getTime() - start) / 1000);

        hours = parseInt(diff / 3600);
        minutes = parseInt((diff / 60) % 60);
        seconds = parseInt(diff % 60);
        startTime = hours*3600 + minutes*60 + seconds;

        if (hours < 10) {
            hours = `0${hours}`;
        }
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        htmlElements.output.innerText = `${hours}:${minutes}:${seconds}`;

        if (diff <= 0) {
            start = new Date().getTime() + 1000;
            resetTimer();
        }
      }, 1000);
    }


function resetTimer() {
    clearInterval(time);
    isRunning = false;
    startTime = 300;
}

export { Timer };
