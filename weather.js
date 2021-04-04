const weather=document.querySelector(".js-weather");

const API_KEY = "ce515d5f14ab0fb2c26073c0f4accc37";
const COORDS = 'coords';

function getWeather(lat, long){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}&units=metric`
    ).then(function (response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place= json.name;
        weather.innerText = `${temperature} @ ${place}`;
    });

}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
     const latitude = position.coords.latitude;
     const longitude = position.coords.longitude;
     const coordsObj={
         latitude: latitude,
         longitude: longitude
         // same as just write 'latitude, longitude' (when key equals value)
     };
     saveCoords(coordsObj);
     getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log(`Can't access geo location`);
}
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function leadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCoords);
        console.log(parseCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}









function init(){
    leadCoords();
}

init();