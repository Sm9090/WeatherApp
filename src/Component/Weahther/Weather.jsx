import React from 'react';
import Windlogo from '../../assets/wind.png'
import clearlogo from '../../assets/clear.png'
import drizzlelogo from '../../assets/drizzle.png'
import humiditylogo from '../../assets/humidity.png'
import rainlogo from '../../assets/rain.png'
import cloudlogo from '../../assets/cloud.png'
import './Weather.css'


function Weather({ weatherData  }) {
  // Extracting required data
  const {  name, sys, weather, wind, clouds, main: { humidity ,temp} } = weatherData;

  // Generating image path based on the icon code
  const imagePath = `https://openweathermap.org/img/w/${weather[0].icon}.png`;

  const convertKtoC = (kelvin)=>{
    return Math.round(kelvin - 273.15)
  }

  return (
    <div className="Weather-container">
      <div className="center">
        <img src={imagePath} alt="Weather pic" width={80} />
        <h2>{convertKtoC(temp)}&deg;C</h2>
        <p>{name}, {sys.country}</p>
        <p>{weather[0].description}</p>
      </div>
      <div className="image-container">
        <div>
          <h3>{wind.deg}&deg;</h3>
          <img src={Windlogo} alt="Wind" />
          <p>Wind Flow</p>
        </div>
        <div>
          <h3>{clouds.all}</h3>
          <img src={cloudlogo} alt="Clouds" />
          <p>Clouds</p>
        </div>
        <div>
          <h3>{humidity}%</h3>
          <img src={humiditylogo} alt="Humidity" />
          <p>Humidity</p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
