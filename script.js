var IP = "play.allrounder.ml";

function CopyIP(){
      /* Get the text field */
  navigator.clipboard.writeText(IP);

}

window.onload = function() {
    var ipElement = document.getElementById("IP");

    ipElement.innerHTML = "IP:  " + IP;
}
