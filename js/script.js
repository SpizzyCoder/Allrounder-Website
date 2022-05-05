var IP = "play.allrounder.ml";

$(document).ready(function () {
  $('#IP').html("IP:  " + IP);

  $("#IP").click(function () {
    navigator.clipboard.writeText(IP);
    $(this).popover({
      template: '<div class="popover bg-dark" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body text-white fs-6"></div></div>'
    });
    $(this).popover("show");
    setTimeout(function () {
      $('#IP').popover("hide");
    }, 2000);
  })
});