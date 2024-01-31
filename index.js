
function changeText() {
   var textElement = document.getElementById("text");
   var currentText = textElement.innerHTML;
   
   if (currentText === "Are you not thinking?") {
      textElement.innerHTML = "Are you thinking?";
   } else {
      textElement.innerHTML = "Are you not thinking?";
   }
}
    
