var fldName = document.getElementById('name');
fldName.oninvalid =
 function () {
     fldName.setCustomValidity("");
     if (!fldName.validity.valid) {
         fldName.setCustomValidity(
          "We don't sell to nameless customers."
         );
     }
 };