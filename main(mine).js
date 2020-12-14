function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {

        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "00:" + seconds;

        if (--timer < 0) {
            timer = 0;
        }
    }, 1000);
}

const start = document.querySelector('.start')

start.addEventListener('click', () => {
    var start = 10,
        display = document.querySelector('#time');
    startTimer(start, display);
})