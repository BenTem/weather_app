$(function () {
  // var acXHR;

  $('#search').autocomplete({
    delay: 0,
    source: function (req, resCB) {
       // if (acXHR) {
       //     acXHR.abort(); This is important for when type is json
       // }
      acXHR = $.ajax({
        method: 'GET',
        url: 'http://autocomplete.wunderground.com/aq',
        data: {
          query: req.term
        },
        dataType: 'jsonp',
        jsonp: 'cb',
        success: function (data) {

          var cityArray = data["RESULTS"].filter(function(value) {
            return value.type == "city";
          });

          resCB(cityArray.map(function (city) {
            console.log(city)

              return city.name;;

          }));
        },
        error: function () {
          resCB();
        }
      });
    }
  });

  $('#srch_btn').on('click', function(e){
    e.preventDefault();
    searchterm = $('#search').val();
    function getlatlong(searchterm, done) {
      $.ajax({
        method: 'GET',
        url: 'http://autocomplete.wunderground.com/aq',
        data: {
          query: searchterm
        },
        dataType: 'jsonp',
        jsonp: 'cb',
        success: done,
        error: function () {
          console.log('error');
        }
      });
    };

    var responseCallback = function(result) {
      var zmw = result['RESULTS'][0].zmw + '.json';
      var lat = parseInt(result['RESULTS'][0].lat);
      var lon = parseInt(result['RESULTS'][0].lon);
      console.log(result['RESULTS'][0])
      $.ajax({
        method: 'GET',
        url: 'http://api.wunderground.com/api/44f0caac7402487f/conditions/q/zmw:' + zmw,
        dataType: 'jsonp',
        success: function (data) {
          var value = data['current_observation'];
          $("#city").empty();
          $("#city").append("<h3>" + value.display_location['city'] + ", " +  value.display_location['country'] + "</h3>");

          $("#cities").empty();
          $("#cities").append("<p>" +
            "<br>" + "Local time: " + value.local_time_rfc822 + 
            "<br>" + "Weather: " + value.weather + 
            "<br>" + "Temperature: " + value.temperature_string + 
            "<br>" + "Feels Like: " + value.feelslike_string + 
            "<br>" + "Precipitation today: " + value.precip_today_string +
            "<br>" + "Dewpoint: " + value.dewpoint_string +
            "<br>" + "wind: " + value.wind_string +
            '</p>');
        },
        error: function () {
          console.log(error);
        }
      });
      map.setCenter({lat: lat, lng: lon});
      new google.maps.Marker({position: {lat: lat, lng: lon}, map: map}); 
    } 
    getlatlong(searchterm, responseCallback);
  });

/////

});