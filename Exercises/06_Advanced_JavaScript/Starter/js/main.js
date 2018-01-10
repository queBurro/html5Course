

var photoEditor = new Object();



photoEditor.setCaption = function (captionID, captionTextID) {
    var captionID = document.getElementById(captionID);
    captionID.innerText = document.getElementById(captionTextID).value;
}

var btnCaption = document.getElementById('setCaption');

btnCaption.addEventListener('click', function () {
    photoEditor.setCaption('caption1', 'captionText')
}, false);
