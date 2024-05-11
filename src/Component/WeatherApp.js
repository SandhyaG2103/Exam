import React, { useState } from "react";

const WeatherApp = () => {
    const [city, setCity] = useState('');
    const [weatherInfo, setWeatherInfo] = useState(null);

    function getWeather() {
        const apiKey = '611b818d9cd6e686c01413289950de2b';
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setWeatherInfo(data); // Update weatherInfo state with fetched data
            })
            .catch(error => {
                console.error('Error fetching weather data:', error);
                setWeatherInfo(null); // Reset weatherInfo state in case of error

let MT = Math.round(data.main.temp);
let FL = Math.round(data.main.feels_like);




            });
    }const weather ={
        location :`weather in $(data.name}`,
        temperature:`Temperature: ${MT} c`,
        feelslike:`Feels like:${FL} c`,
        humidity:`Humidity: ${data.weather[0].description}`,
    };

setWeatherInfo(weather);

    return (
        <div className="Weather-Container">
            <input
                type='text'
                placeholder='Enter City Name'
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={getWeather}>Get Weather</button>
            {weatherInfo && (
                <div className='weather-Info'>
                    <h3>{weatherInfo.city.name}, {weatherInfo.city.country}</h3>
                    <p>Temperature: {weatherInfo.list[0].main.temp} K</p>
                    <p>Weather: {weatherInfo.list[0].weather[0].description}</p>
                  
                </div>
            )}
        </div>
    );
}

export default WeatherApp;
