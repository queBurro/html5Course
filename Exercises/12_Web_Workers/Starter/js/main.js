
var first = document.querySelector('#number1');
var second = document.querySelector('#number2'); //id
var result = document.querySelector('.result'); //class


if (window.Worker) {
    var myWorker = new Worker("js/worker.js");

    first.onkeyup = function () {
        myWorker.postMessage([first.value, second.value]);
        console.log('Message posted to worker');
    };

    second.onkeyup = function () {
        myWorker.postMessage([first.value, second.value]);
        console.log('Message posted to worker');
    };

    myWorker.onmessage = function (e) {
        result.textContent = e.data;
        console.log('Message received from worker');
    };

}






