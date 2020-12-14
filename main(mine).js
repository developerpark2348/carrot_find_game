// Timer
function startTimer(duration, display) {
    var timer = duration, seconds;
    setInterval(function () {

        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = "00:" + seconds;

        if (--timer < 0) {
            timer = 0;
            document.querySelector('.footer').style.opacity = "0.7";
        };
    }, 1000);
}

//start button to play
const startBtn = document.querySelector('.start');
startBtn.addEventListener("click", () => {
    display = document.querySelector('#time');
    startTimer(10, display);
})