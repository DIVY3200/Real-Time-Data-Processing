import express from 'express';
import WeatherService from '../services/weatherService.js';

const router = express.Router();

router.get('/:city', async (req, res) => {
    const { city } = req.params;
    try {
        const weatherData = await WeatherService.getWeather(city);
        console.log(weatherData);

        if (!weatherData || !weatherData.weather || !weatherData.main) {
            return res.status(404).json({ message: 'Weather data not found' });
        }

        // Construct the response object to include wind speed and humidity
        const response = {
            main: weatherData.weather[0].main,
            temp: weatherData.main.temp,
            feels_like: weatherData.main.feels_like,
            humidity: weatherData.main.humidity, // Add humidity
            wind_speed: weatherData.wind.speed, // Add wind speed
            dt: weatherData.dt,
        };

        res.json(response); 
    } catch (error) {
        res.status(500).json({ message: `Error fetching weather data: ${error.message}` });
    }
});

export default router;
