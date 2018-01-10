(function (p) {
    var result = fetch('colourWheel.html');

    result.then(function (response) {
        console.log('response', response);
        console.log('header', response.headers.get('ContentType'));
        return response.text();
    }).then(function (text) {

        p.addEventListener("click", function () {
            try {
                var output = document.querySelector('#outputXXXX');
                output.innerHTML = text;
            } catch (error) {
                console.log('failedasdasdas', error);
            }



        })

    }).catch(function (ex) {
        console.log('failed', ex);
    });




})(document.querySelector("#loadWheel"));
