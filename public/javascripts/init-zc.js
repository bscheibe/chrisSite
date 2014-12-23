$(document).ready(function() {

  var clip = new ZeroClipboard($(".clip_button"), {
    moviePath: "/vendor/zeroClipboard/ZeroClipboard.swf"
  });

  clip.on("load", function (client) {
    //debugstr("Flash movie loaded and ready.");

    client.on("complete", function (client, args) {
      debugstr("Copied: " + args.text);
       $("#d_debug").show(0, function() {
          $("#d_debug").delay(1000).hide(0, function () {
             $("#d_debug").find('p').remove();
          });
       });
    });
  });

  clip.on("noFlash", function (client) {
    $(".demo-area").hide();
    debugstr("Your browser has no Flash.");
  });

  clip.on("wrongFlash", function (client, args) {
    $(".demo-area").hide();
    debugstr("Flash 10.0.0+ is required but you are running Flash " + args.flashVersion.replace(/,/g, "."));
  });


  // jquery stuff (optional)
  function debugstr(text) {
    $("#d_debug").append($("<p>").text(text));
  }

  $("#clear-test").on("click", function () {
    $("#fe_text").val("Copy me!");
    $("#testarea").val("");
  });

});