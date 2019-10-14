var topic = ["Family Guy", "Simpsons", "South Park", "AFV", "Superstore", "Breaking Bad", "Ballers", "Entourage"];

for (var i = 0; i < topic.length; i++) {

      var tvshowbutton = $("<button>");
      tvshowbutton.addClass("tv show");
      tvshowbutton.attr("data-name", topic[i]);
      tvshowbutton.text(topic[i]);
      $("#tvshow-buttons").append(tvshowbutton);
    }