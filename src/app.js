const timerDisplay = document.getElementById("timmer");
let minutes = 60;

const timmer = setInterval(() => {
    minutes--;
    timerDisplay.textContent = `${minutes}:00`;

    if (minutes === 30) {
        alert("Залишилось менше половини часу!");
    }

    if (minutes === 0) {
        clearInterval(timmer);
        alert("Час вийшов!");
    }
}, 60000);



// завдання 2


let time = 30.000;
let interval;
const timerElement = document.getElementById("timer");
const startButton = document.getElementById("startButton");

function startTimer() {
    startButton.disabled = true;
    interval = setInterval(() => {
        time -= 0.001;
        timerElement.textContent = time.toFixed(3);

        if (time <= 10.000) {
            timerElement.classList.add("animation");
        }

        if (time <= 0) {
            clearInterval(interval);
            time = 0.000;
            timerElement.textContent = time.toFixed(3);
            startButton.disabled = false;
        }
    }, 1);
}
