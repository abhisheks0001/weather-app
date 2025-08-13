import SearchBox from './SearchBox';
import InfoBox from "./InfoBox";
import { useState } from 'react';

export default function WeatherApp() {
    const [weatherInfo , setWeatherInfo] = useState({
        city : "Delhi",
        feelslike: 24.84,
        temp: 26.5,
        tempMin: 24.0,
        tempMax: 28.0,
        humidity: 60,
        weather: "clear sky"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return ( 
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h2>WeatherApp by Abhishek</h2>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}