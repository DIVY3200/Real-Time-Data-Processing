import express from 'express';
import path from 'path';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 3000;

const publicDirectoryPath = path.join(process.cwd(), 'src', 'public');

app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(publicDirectoryPath, 'index.html'));
});

// Function to fetch weather data
const fetchWeatherData = async (city) => {
    const apiKey = '13e4ac4dcca1805999f108399d9c87d6';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    
    if (!response.ok) {
        throw new Error('Failed to fetch weather data');
    }
    
    return response.json();
};

// Endpoint to get weather data for a city
app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;

    try {
        const weatherData = await fetchWeatherData(city);
        
        // Structured data to include humidity and wind speed
        const structuredData = {
            main: weatherData.weather[0].main, // Weather condition
            temp: weatherData.main.temp, // Temperature
            feels_like: weatherData.main.feels_like, // Feels like temperature
            humidity: weatherData.main.humidity, // Humidity
            wind_speed: weatherData.wind.speed, // Wind speed
            dt: weatherData.dt // Timestamp
        };
        
        res.json(structuredData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).json({ error: 'Error fetching weather data' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
