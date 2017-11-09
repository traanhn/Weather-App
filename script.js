$(document).ready(function() {
      
      if (navigator.geolocation) {
             navigator.geolocation.getCurrentPosition(function(position) {             
                
                  var lat = position.coords.latitude;
                  var lon = position.coords.longitude;        
               
var api = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID=da8661e9da95c25d11fe02b9b1738f90"

                  var date = new Date();
                 
               $.getJSON(api,function(data){
                 
                 var city = data.name;
                 var wind = data.wind.speed;
                 var Ktemp = data.main.temp;
                 var weathertype = data.weather[0].description;
                 var country = data.sys.country;
             
                 var Ctemp 
                     Ctemp = Math.round(Ktemp - 273.15) + "&#8451;" ; 
                 var Ftemp 
                     Ftemp = Math.round((Ktemp - 273.15) * 9/5 + 32) + "&#8457";  
                 var tempswitch = false;
                 var icon = data.weather[0].icon; 
                 
                 
                 
                 $("#city").html(city);
                 $("#country").html(country);
                 $("#wind").html(wind + "m/s");
                 $("#temp").html(Ctemp);
                 $("#type").html(weathertype);
                 $("#icon").html("<img src=http://openweathermap.org/img/w/"+icon+".png>");
                 $("#date").html(date.toDateString());
                 $("#time").html(date.toLocaleTimeString());
                 
                 $(".switch").click(function(){
                   if(tempswitch === false){
                     $("#temp").html(Ftemp);
                     tempswitch = true;
                   } else {
                     $("#temp").html(Ctemp);
                     tempswitch = false;
                   }
                  });
                 
               });
   
                        });
       }        
 });



