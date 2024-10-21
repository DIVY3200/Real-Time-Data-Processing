import axios  from 'axios';
import config from '../../config/config.js';

const WeatherService = {
    getWeather: async (city) => {
        try {
            const response = await axios.get(`${config.API_BASE_URL}?q=${city}&units=${config.TEMPERATURE_UNIT}&appid=${config.API_KEY}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching weather data for ${city}:`, error);
            throw error;
        }
    }
};

export default WeatherService;
