var fldName = document.getElementById('name'); 


fldName.oninvalid =
function () {
    fldName.setCustomValidity("");
    if (!fldName.validity.valid) {
        fldName.setCustomValidity(
         "w/e"
        );
    }
};