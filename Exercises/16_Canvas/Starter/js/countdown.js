

function countdown() {
    var seconds = 60;
    function tick() {
        var counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") +
            String(seconds);
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            alert("Game over");
        }
    }
    tick();
}

countdown();