var shadedItems = document.querySelectorAll('.gradients');

console.dir(shadedItems);

var theDate = new Date();

var theDay = theDate.getDay();

for (var i = 0; i < shadedItems.length; i++) {

    if (theDay > 0) {
        shadedItems[i].classList.remove('gradients');
    }

    if (theDay === 1) {
        shadedItems[i].classList.add('monGradient');
    }

    if (theDay === 2) {

        shadedItems[i].classList.add('tuesGradient');

    }

    if (theDay === 3) {
        shadedItems[i].classList.add('wedsGradient');
    }

    if (theDay === 4) {
        shadedItems[i].classList.add('thursGradient');
    }

    if (theDay === 5) {
        shadedItems[i].classList.add('friGradient');
    }

    if (theDay === 6) {
        shadedItems[i].classList.add('satGradient');
    }


}