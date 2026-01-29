var weatherBtn = document.getElementById('weatherBtn');
var todayWeather = document.getElementById('todayWeather');
var cityInput = document.getElementById('search');
var stateInput = document.getElementById('search2');
var weatherTxt = document.getElementById('date1');
var celciusOrFahrenheit = document.getElementById('check');

weatherBtn.addEventListener('click', getWeather);

async function getWeather() {
    const cityName = cityInput.value;
    const stateName = stateInput.value;
    const celciusOrFahrenheitChecked = celciusOrFahrenheit.checked;

    const cityRequest = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=10&language=en&format=json`;

    try {
        const cityResponse = await fetch(cityRequest);
        if (!cityResponse.ok)
        {
            throw new Error('HTTP error! status: ' + cityResponse.status)
        }
        const cityData = await cityResponse.json();
        if (cityData.results == null)
        {
            weatherTxt.innerHTML = "No Results Found";
        }

        var lat;
        var long;

        for (let i = 0; i < cityData.results.length; i++){
            if (cityData.results[i].admin1 == stateName)
            {
                lat = cityData.results[i].latitude;
                long = cityData.results[i].longitude;
                break;
            }
            else
            {
                lat = cityData.results[0].latitude;
                long = cityData.results[0].longitude;
            }
        }

        const weatherRequest = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`;
        const weatherResponse = await fetch(weatherRequest);


        if (!weatherResponse.ok) {
            throw new Error(`Weather API error! status: ${weatherResponse.status}`);
        }
        const weatherData = await weatherResponse.json();

        var unFixedTime = weatherData.current_weather.time;
        var fixedTime = new Date(unFixedTime);
        var date = fixedTime.getDate() - 1;
        var month = fixedTime.getMonth() + 1;
        var year = fixedTime.getFullYear();

        var currentTemp = weatherData.current_weather.temperature;

        if (celciusOrFahrenheitChecked == false)
        {
            currentTemp = convertTemp(currentTemp);
            weatherTxt.innerHTML = "Current Date: " + month + "/" + date + "/" + year + '<br>' + '</br>' + "Current Weather: " + currentTemp + "°F";
        }
        else
        {
            weatherTxt.innerHTML = "Current Date: " + month + "/" + date + "/" + year + '<br>' + '</br>' + "Current Weather: " + currentTemp + "°C";
        }        
        }catch {

    }
}

function convertTemp(temp) {
        var x = (temp * (9 / 5)) + 32; 
        return x.toFixed(2);
}
