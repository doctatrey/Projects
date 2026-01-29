var weatherBtn = document.getElementById('weatherBtn');

var todayWeather = document.getElementById('todayWeather');
var day2Weather = document.getElementById('day2Weather');
var day3Weather = document.getElementById('day3Weather');
var day4Weather = document.getElementById('day4Weather');
var day5Weather = document.getElementById('day5Weather');
var day6Weather = document.getElementById('day6Weather');
var day7Weather = document.getElementById('day7Weather');

date1 = document.getElementById('date1');
date2 = document.getElementById('date2');
date3 = document.getElementById('date3');
date4 = document.getElementById('date4');
date5 = document.getElementById('date5');
date6 = document.getElementById('date6');
date7 = document.getElementById('date7');

let request = "https://api.open-meteo.com/v1/forecast?latitude=45.30294&longitude=-122.777992&current=temperature_2m&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=America%2FLos_Angeles";

weatherBtn.addEventListener('click', getWeather);

function getWeather() {

    fetch(request).then((response) => {
      if (!response.ok)
      {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    }).then((data) => {
        console.log(data);

        todayWeather.innerHTML =  "Current: " + data.current.temperature_2m + "°" + "<br>" + "High: " + data.daily.temperature_2m_max[0] + "°" + "<br>" + "Low: " + data.daily.temperature_2m_min[0] + "°";
        day2Weather.innerHTML = "High: " + data.daily.temperature_2m_max[1] + "°" + "<br>" + "Low: " + data.daily.temperature_2m_min[1] + "°";
        day3Weather.innerHTML = "High: " + data.daily.temperature_2m_max[2] + "°" + "<br>" + "Low: " + data.daily.temperature_2m_min[2] + "°";
        day4Weather.innerHTML = "High: " + data.daily.temperature_2m_max[3] + "°" + "<br>" + "Low: " + data.daily.temperature_2m_min[3] + "°";
        day5Weather.innerHTML = "High: " + data.daily.temperature_2m_max[4] + "°" + "<br>" + "Low: " + data.daily.temperature_2m_min[4] + "°";
        day6Weather.innerHTML = "High: " + data.daily.temperature_2m_max[5] + "°" + "<br>" + "Low: " + data.daily.temperature_2m_min[5] + "°";
        day7Weather.innerHTML = "High: " + data.daily.temperature_2m_max[6] + "°" + "<br>" + "Low: " + data.daily.temperature_2m_min[6] + "°";

        date3.innerHTML = data.daily.time[2];
        date4.innerHTML = data.daily.time[3];
        date5.innerHTML = data.daily.time[4];
        date6.innerHTML = data.daily.time[5];
        date7.innerHTML = data.daily.time[6];
    }).catch((error) => {
        console.log(error);
    });
}
