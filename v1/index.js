/* global navigator */
/* global $ */
/* global APIKEY */
/* global position */

$(function(){
    var C = false;
    var apiData;
    var backgroundImg = ["image1", "image2",];
    
    function displayTemp (F,C){
        if(C) return Math.round((F-32)*(5/9)) + '&deg; C';
        return Math.round(F) + '&deg; F';
    }
    
    $.getJSON('https://freegeoip.net/json/').done(function(location){
            console.log(location);
            $('#yourCity').html(location.city);
            $('#yourLatitude').html(location.latitude);
            $('#yourLongitude').html(location.longitude);
            console.log('the weather api call is about to happen');
            
        $.getJSON('//api.openweathermap.org/data/2.5/weather?lat='
        +location.latitude+'&lon='
        +location.longitude+'&units=imperial&appid='+APIKEY, 
        function(data){
            apiData = data;
            console.log(data);
            console.log(data.weather[0].description);
            console.log(data.wind.speed);
        });
        });
    
    
    
});


//$.getJSON('https://freegeoip.net/json/').done(function(location){
//    console.log(location);
//});










function getLocation() {
    console.log("get ready to see coordinates!");
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);} 
        else {
        document.getElementById("thatPosition").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    console.log("Show me the Position");
    document.getElementById("thatPosition").innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
    console.log("It better be there!!!");
}

document.getElementById("locationHere").onclick = function(){
    getLocation();
};
document.getElementById("weatherHere").onclick = function(){
    wGenerator.getWeather();
};

// var lon = position.coords.longitude;
// var lat = position.coords.latitude;



var wGenerator = {

//function for the ajax call
    getWeather: function(){
        console.log("show me the weather");
// ???Should I set:
// var that = this;
       $.ajax({
        method: "GET",
        url: "api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon,
        dataType: "JSON",
        // lat: position.coords.longitude,
        // lon: position.coords.latitude,
        data: { apikey: APIKEY },
//write a success function
        success: function(msg) {
            console.log(msg);
            this.weather = msg.weather,
            this.main = msg.main
        }
    }); 
    }
}







// weatherGen = {
    
// }

