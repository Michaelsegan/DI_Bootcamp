import axios from 'axios';

const URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = '4631781769b6bdab5b37b4a891b655e0';
export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params: {
            q: query,
            units:'metric',
            APPID: API_KEY,
        }
    })
    return data;
}
