$(document).ready(function(){
  console.log("hmmmm")
  $('#location-btn').on("click", function(){
    var location = $('#location-input').val();
    if(location != ''){
      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=imperial&APPID=8c051d7ffccf2ab96aef8e3b478267a2",
        type: "get",
        success: function(data){
          console.log(data)
          $('#temperature').html("Temperature: " + data.main.temp + " degrees farenheit")
          $('#weather').html("Weather: " + data.weather[0].description)
          $('#humidity').html("Humidity: " + data.main.humidity + "%")
        }
      })
    }else{
      alert('You must enter a location')
    }
  })
  // $.ajax({
  //   method: "GET",
  //   url: "http://api.wunderground.com/api/3b7dd63fa1ba1bda/conditions/q/CA/San_Francisco.json",
  //   success: function(data){
  //     console.log(data)
  //   }
  // })

})
