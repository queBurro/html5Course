
(function () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, { enableHighAccuracy: false, timeout: 10000 });
    } else {
        error('Your browser does not support geolocation');
    }

    function success(position) {
        var s = document.querySelector('#status');
        s.innerHTML = "found you!";
        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '400px';
        mapcanvas.style.width = '560px';

        document.querySelector('article').appendChild(mapcanvas);

        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        var myOptions = {
            zoom: 25,           //The initial Map zoom level.
            center: latlng,    //The initial Map center.
            mapTypeControl: true,    //The initial enabled/disabled state of the Map type control.
            navigationControlOptions: { style: 'DEFAULT', position: 'TOP_RIGHT' },
            mapTypeId: google.maps.MapTypeId.SATELLITE    // displays Google Earth satellite images
        };

        var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "You are here!"
        });
    }

    function error(msg) {
        var s = document.querySelector('#status');
        s.innerHTML = typeof msg == 'string' ? msg : "failed";
    }

})()
