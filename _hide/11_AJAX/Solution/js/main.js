(function (p) {

    var result = fetch('colourWheel.html');

    result.then(function (response) {
        console.log('response', response);
        console.log('header', response.headers.get('Content-Type'));
        return response.text();
    }).then(function (text) {
           
        p.addEventListener("click", function () {
            var output = document.querySelector('#output');
            output.innerHTML = text;
        })
       
    }).catch(function (ex) {
        console.log('failed', ex);
    });
})(document.querySelector("#loadWheel"));

