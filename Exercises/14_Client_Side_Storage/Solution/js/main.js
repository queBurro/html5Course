var mainContainer = document.querySelector(".main-container");
var main = document.querySelector(".main");
var imgElem = document.querySelector('img');


var bgcolorForm = document.querySelector('#bgcolor');
var fontForm = document.querySelector('#font');
var imageForm = document.querySelector('#image');


if (!localStorage.getItem('bgcolor')) {
    populateStorage();
} else {
    setStyles();
}

function populateStorage() {
    localStorage.setItem('bgcolor', bgcolorForm.value);
    localStorage.setItem('font', fontForm.value);
    localStorage.setItem('image', imageForm.value)

    setStyles();
}

function setStyles() {
    var currentColor = localStorage.getItem('bgcolor');
    var currentFont = localStorage.getItem('font');
    var currentImage = localStorage.getItem('image');

    bgcolorForm.value = currentColor;
    fontForm.value = currentFont;
    imageForm.value = currentImage;

    mainContainer.style.backgroundColor = '#' + currentColor;
    main.style.fontFamily = currentFont;
    imgElem.setAttribute('src', currentImage);
}


bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;

