const timerDisplay = document.getElementById("timer");
let minutes = 60;

const timer = setInterval(() => {
    minutes--;
    timerDisplay.textContent = `${minutes}:00`;

    if (minutes === 30) {
        alert("Залишилось менше половини часу!");
    }

    if (minutes === 0) {
        clearInterval(timer);
        alert("Час вийшов!");
    }
}, 60000);
