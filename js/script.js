var IP = "play.allrounder.ml";

function CopyIP(){
  /* Get the text field */
  navigator.clipboard.writeText(IP);
}

document.addEventListener("DOMContentLoaded", function() {
  var ipElement = document.getElementById("IP");
  console.log(ipElement);
  ipElement.innerHTML = "IP:  " + IP;
});