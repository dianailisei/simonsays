let startBtn = document.getElementById("start");
let pauseBtn = document.getElementById("pause");
let intervalId;
let timer = 10;
let timerContainer = document.getElementById("timer");
timerContainer.innerText = timer;

startBtn.addEventListener("click", function () {
    intervalId = setInterval(function () {
        let randomIndex = Math.floor(Math.random() * 9) + 1;
        changeBackgroundColor(randomIndex);
        timer -= 1;
        if(timer == 0)
        {
            clearInterval(intervalId);
        }
        if(timer <= 3)
        {
            timerContainer.classList.add("warning");
        }
        timerContainer.innerText = timer;

    }, 1000);
})
function changeBackgroundColor(id) {
    var btn = document.getElementById(id);
    btn.classList.add("highlighted-btn");
    setTimeout(function () {
        btn.classList.remove("highlighted-btn");
    }, 1000);
}

pauseBtn.addEventListener("click", function() {
    clearInterval(intervalId);
})