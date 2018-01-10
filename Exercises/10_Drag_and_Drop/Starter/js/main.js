function drag(target,e){
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.drag('text', target.id);
    e.dataTransfer.setDragImage(e.target, 20, 20);
    
}

function dragEnter(ev) {
    event.preventDefault();
    return true;
}

function dragOver(ev) {
    event.preventDefault();
}

function drop(target, e) {
    var id = e.dataTransfer.getData('text');
    target.appendChild(document.getElementById(id));
    e.preventDefault();
}

