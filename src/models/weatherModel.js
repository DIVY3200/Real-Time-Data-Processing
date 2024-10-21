import db from '../db.js';

const Weather = {
    saveWeatherData: async (city, temperature, feelsLike, main, humidity, windSpeed, alertThreshold, timestamp) => {
        const query = `
            INSERT INTO weather (city, temperature, feels_like, main, humidity, wind_speed, alert_threshold, timestamp)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
        `;
        try {
            await db.query(query, [city, temperature, feelsLike, main, humidity, windSpeed, alertThreshold, timestamp]);
            console.log(`Weather data for ${city} saved successfully.`);
        } catch (error) {
            console.error('Error saving weather data:', error);
        }
    },

    getWeatherData: async (city) => {
        const query = `SELECT * FROM weather WHERE city = $1 ORDER BY timestamp DESC LIMIT 10`;
        try {
            const result = await db.query(query, [city]);
            return result.rows;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            return [];
        }
    },

    getAllWeatherData: async () => {
        const query = `SELECT * FROM weather ORDER BY timestamp DESC`;
        try {
            const result = await db.query(query);
            return result.rows;
        } catch (error) {
            console.error('Error fetching all weather data:', error);
            return [];
        }
    },

    deleteWeatherData: async (id) => {
        const query = `DELETE FROM weather WHERE id = $1`;
        try {
            await db.query(query, [id]);
            console.log(`Weather data with ID ${id} deleted successfully.`);
        } catch (error) {
            console.error('Error deleting weather data:', error);
        }
    },
};

export default Weather;
