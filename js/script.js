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

  // Languages
  $('#heroText').html(lang.german.hero);
  $('#discordText').html(lang.german.discord_card);
  $('#instagramText').html(lang.german.instagram_card);
  $('#allcraftText').html(lang.german.allcraft);

  $('#langGerman').click(function () {
    $('#heroText').html(lang.german.hero);
    $('#discordText').html(lang.german.discord_card);
    $('#instagramText').html(lang.german.instagram_card);
    $('#allcraftText').html(lang.german.allcraft);
  })

  $('#langEnglish').click(function () {
    $('#heroText').html(lang.english.hero);
    $('#discordText').html(lang.english.discord_card);
    $('#instagramText').html(lang.english.instagram_card);
    $('#allcraftText').html(lang.english.allcraft);
  })
});