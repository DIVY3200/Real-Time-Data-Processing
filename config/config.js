import dotenv from 'dotenv';
dotenv.config();

const config = {
    API_KEY: process.env.OPENWEATHERMAP_API_KEY,
    API_BASE_URL: process.env.OPENWEATHERMAP_API_BASE_URL,
    UPDATE_INTERVAL: 300000, // 5 minutes in milliseconds
    CITIES: ['Delhi', 'Mumbai', 'Chennai', 'Bangalore', 'Kolkata', 'Hyderabad'],
    
    TEMPERATURE_UNIT: 'metric',  // 'imperial' for Fahrenheit
    HUMIDITY_THRESHOLD: 70, // Maximum humidity threshold in percentage
    WIND_SPEED_THRESHOLD: 15, // Maximum wind speed threshold in km/h
    MAX_TEMPERATURE_THRESHOLD: 35,  // Maximum temperature threshold in Celsius
    CONSECUTIVE_ALERTS: 2,  // Number of consecutive alerts to trigger notifications

    dbConfig: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER, // Corrected from DB_HOST to DB_USER
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.DB_PORT,
    }
};

console.log(`API Key: ${config.API_KEY}`);

export default config;
