
    //2)define the javascript function that will run when we start to drag this element
    function drag(target, e) {
        //3)In this code we first declare what type of effect we allow in the operation, we set that to move
        e.dataTransfer.effectAllowed = 'move';
        //4)set the data for the operation and in this case the type is Text 
        //    and the value is the ID of the element we are dragging
        e.dataTransfer.setData('text', target.id);
        //5)use the setDragImage method to set what we will be dragging and then where the cursor will be while dragging, 
        //    and since the cubes are 200 by 200px I placed that at the very center. Finally we return true.
        e.dataTransfer.setDragImage(e.target, 20, 20);
    }

    //7)We added event listeners we need to create these functions, we will start by the dragenter and dragover events
    //8) In the first function we define what we want to happen when the element we are dragging reaches the element it 
    //supposed to be dropped in, in this case we only prevent the default behavior of the browser but you can do 
    //any number of things like change the background or add some text to indicate that the user is 
    //dragging to the correct area 
    //and using the dragleave event you can revert the changes you made.

    function dragEnter(ev) {
        event.preventDefault();
        return true;
    }

    //9)Next in the dragOver function we simply prevent the default to allow for the drop.
    function dragOver(ev) {
        event.preventDefault();
    }

    //10)The next part is where we define the function for when we actually drop the element on the desired target.
    //11) first set a variable called data in which we get all the data that is available for the text format and then we append that data 
    //(which will be the element that we are dragging) to the div where we wish to drop the element.
    //Finally some final touches like stopping propagation and also returning false.

    function drop(target, e) {
        var id = e.dataTransfer.getData('text');
        target.appendChild(document.getElementById(id));
        e.preventDefault();
    }



