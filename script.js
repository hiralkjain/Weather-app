const apikey="0583596616cc1100b5ab46a36b304fe6";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const city = document.querySelector(".search input");
const searchbutton = document.querySelector(".search button");
const wicon = document.querySelector(".weathericon");
async function checkweather(city)
{
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    if(response.status == "404")
        alert("Invalid city name")
    
    var data = await response.json();
   console.log(data)
    const condition = data.weather[0].main;
    if(condition == "Clear")
        wicon.src = "images/clear.png";
    if(condition == "Clouds")
        wicon.src = "images/clouds.png";
    if(condition == "drizzle")
        wicon.src = "images/drizzle.png";
    if(condition == "mist")
        wicon.src = "images/mist.png";
    if(condition == "snow")
        wicon.src = "images/snow.png";
    if(condition == "rain")
        wicon.src = "images/rain.png";



    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
}
searchbutton.addEventListener('click',()=>{
    checkweather(city.value);
    city.value="";
});