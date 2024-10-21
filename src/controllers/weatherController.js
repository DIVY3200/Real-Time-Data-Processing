import service from '../services/weatherService.js';
import model from '../models/weatherModel.js';
import config from '../../config/config.js';

const WeatherController = {
    fetchAndStoreWeatherData: async (req, res) => {
        try {
            for (const city of config.CITIES) {
                const weatherData = await service.getWeather(city);
                if (!weatherData || !weatherData.main) {
                    console.error(`No weather data returned for ${city}`);
                    continue; // Skip this city if no data is returned
                }
                const { temp, feels_like } = weatherData.main;
                const main = weatherData.weather[0].main;
                const timestamp = new Date();

                // Save data to PostgreSQL
                await model.saveWeatherData(city, temp, feels_like, main, config.MAX_TEMPERATURE_THRESHOLD, timestamp);
            }
            res.status(200).send('Weather data updated successfully.');
        } catch (error) {
            console.error('Error updating weather data:', error);
            res.status(500).send('Error updating weather data');
        }
    },

    getWeatherForCity: async (req, res) => {
        try {
            const city = req.params.city;
            const weatherData = await model.getWeatherData(city);
            res.status(200).json(weatherData);
        } catch (error) {
            console.error('Error fetching weather data:', error);
            res.status(500).send('Error fetching weather data');
        }
    },

    getAllWeatherData: async (req, res) => {
        try {
            const weatherData = await model.getAllWeatherData();
            res.status(200).json(weatherData);
        } catch (error) {
            console.error('Error fetching all weather data:', error);
            res.status(500).send('Error fetching all weather data');
        }
    },

    deleteWeatherData: async (req, res) => {
        const id = req.body.id;
        try {
            await model.deleteWeatherData(id);
            res.status(200).send(`Weather data with ID ${id} deleted successfully.`);
        } catch (error) {
            console.error('Error deleting weather data:', error);
            res.status(500).send('Error deleting weather data');
        }
    }
};

export default WeatherController;
