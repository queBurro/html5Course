var photoEditor = new Object();

photoEditor.setCaption = function (captionID, captionTextID) {
    var captionID = document.getElementById(captionID);
    captionID.innerText = document.getElementById(captionTextID).value;
}


var setCaption = document.querySelector('#setCaption');

setCaption.addEventListener('click', function () {
    photoEditor.setCaption('caption1', 'captionText');
}, false);

