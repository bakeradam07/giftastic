var topic = ["Family Guy", "Simpsons", "South Park", "AFV", "Superstore", "Breaking Bad", "Ballers", "Entourage"];

function renderButtons() {

$("#tvshow-buttons").empty();

for (var i = 0; i < topic.length; i++) {

      var tvshowbutton = $("<button>");
      tvshowbutton.addClass("tvshow");
      tvshowbutton.attr("data-name", topic[i]);
      tvshowbutton.text(topic[i]);
      $("#tvshow-buttons").append(tvshowbutton);
    }
}

    $("#find-tvshow").on("click", function(event) {
      event.preventDefault();

      var tvshow = $("#show-input").val().trim();
      
      topic.push(tvshow);

      renderButtons();

    });

    renderButtons();