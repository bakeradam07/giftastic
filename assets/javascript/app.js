
var topic = ["Family Guy", "Simpsons", "South Park", "AFV", "Superstore", "Breaking Bad", "Ballers", "Entourage"];

function tvshowButtons() {

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

      tvshowButtons();

    });

    

  tvshowButtons();

  

  function displayShowGif () {
    var tvshow = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tvshow + "&api_key=SoP1reCn3w8jX9cpGCQLyD0G9zKcIXaY&limit=10";

    console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      
      console.log(response);
      $("#tvshow-view").empty();

      var gifs = response.data;

      for (var i = 0; i < gifs.length; i++) {
        var tvshowDiv = $("<div class='tvshow'>");
        var rating = gifs[i].rating;
        var displayRating = $("<p>").html("Rating: " + rating);
        var showGIF = $('<img>');
          showGIF.attr('src', gifs[i].images.fixed_height_still.url)


        tvshowDiv.append(displayRating).append(showGIF);

        $('#tvshow-view').prepend(tvshowDiv);
      }

      
  });
}


$(document).on("click", ".tvshow", displayShowGif);


// $("#tvshow-view").empty();