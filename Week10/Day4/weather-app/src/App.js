import React, {useState} from 'react';
import {fetchWeather} from './api/fetchWeather';
import './App.css';


const App = () => {
    const [query,setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if(e.key === 'Enter'){
            const data = await fetchWeather(query);
            console.log(data);
            setWeather(data);
            setQuery('');


        }
    }

    return (
        <div className="main-container">
            <input type='text' className='search' placeholder='Search...' value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />
            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <p>Humidity:{weather.main.humidity}</p>
                    <p>Conditions:{weather.weather[0].main}</p>

                </div>          
            )}  
        </div>
    );
}


export default App;