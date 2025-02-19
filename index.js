const w_img = document.getElementById("w-icon");
const temp = document.getElementById("temp");
const city = document.getElementById("city");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const apiKey = '23a3a95062285c2900182106c15552f6';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');

async function checkWeather(input) {
    try {
        const response = await fetch(apiUrl + input + `&appid=${apiKey}`);
        if (!response.ok) throw new Error("City not found");
        
        var data = await response.json();
        city.textContent = data.name;
        temp.textContent = Math.round(data.main.temp) + '°C';
        humidity.textContent = data.main.humidity + '%';
        wind.textContent = data.wind.speed + ' km/h';
        console.log(data);
        
        // Fixed weather icon link
        w_img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Invalid city name or API issue!");
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(search.value);
});
