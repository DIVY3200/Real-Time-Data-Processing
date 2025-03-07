**Application 2 : Real-Time Data Processing System for
Weather Monitoring with Rollups and Aggregates**

**Objective:**

Develop a real-time data processing system to monitor weather conditions and provide
summarized insights using rollups and aggregates. The system will utilize data from the
OpenWeatherMap API.

**Data Source:**
The system will continuously retrieve weather data from the OpenWeatherMap API. You will
need to sign up for a free API key to access the data. The API provides various weather
parameters, and for this assignment, we will focus on.

**Design Choice:**

**1. Architecture**
Frontend-Backend Separation: The application follows a classic client-server architecture where the frontend (HTML/CSS/JavaScript) interacts with the backend (Node.js/Express) to fetch weather data. This separation allows for better maintainability, scalability, and the potential to replace or upgrade either side independently.

**2. User Interface**
Simplicity and Usability: The UI is designed to be straightforward and user-friendly. Users can easily input city names and receive weather updates without unnecessary complexity.
Responsive Design: The application is intended to be accessible on different devices (desktops, tablets, smartphones) by using flexible layouts and media queries, ensuring that it is usable across platforms.

**3. Input Handling**
City Input: Users can enter city names to fetch weather data. This feature includes local storage for search history to enhance user experience by allowing quick access to previously searched cities.
Temperature Scale Selection: A dropdown allows users to choose between Celsius, Fahrenheit, and Kelvin. This enhances usability by catering to user preferences for temperature units.\

**4. Weather Data Fetching**
API Integration: The backend fetches weather data from a reliable weather API (e.g., OpenWeatherMap). This decision allows the application to leverage real-time data and ensures the information is up-to-date.
Error Handling: Comprehensive error handling is implemented to manage API errors gracefully, providing users with meaningful messages when data retrieval fails.

**5. Alert Mechanism**
Fixed Temperature Alerts: The application triggers alerts when temperatures exceed predefined thresholds (35°C, 95°F, or 308K). This choice enhances user awareness of significant weather changes and can help in making timely decisions regarding outdoor activities.
Local Storage for Alerts: Although the alert threshold is currently hardcoded, the initial design allows for future scalability where users can set their custom thresholds, making the application more interactive and personalized.

**6. Data Management**
Local Storage for Search History: The application uses local storage to save users' search history, allowing easy retrieval of previously searched cities. This approach minimizes server requests and enhances performance.
State Management: Simple state management is implemented through local variables and DOM manipulation, ensuring efficient updates to the UI without page reloads.

**7. Temperature Conversion Logic**
Dynamic Temperature Conversion: The application includes logic to convert temperature values based on user-selected scales. This decision caters to a wider audience by allowing users to interact with the data in their preferred format.

**8. Code Organization**
Modular JavaScript: The code is organized into functions for clarity and maintainability. This modular approach makes it easier to understand and extend the application in the future.
Event-Driven Programming: The application relies on event listeners to handle user actions, which enhances interactivity and responsiveness.

**9. Performance Considerations**
Asynchronous Fetching: The use of asynchronous functions (async/await) for API calls ensures that the application remains responsive while waiting for data to be fetched.
Minimal UI Blocking: The application is designed to avoid blocking the user interface during data fetch operations, providing a smooth user experience.

**Step to run the project:**

npm init

cd to project_name

Package need to Install:
axios, body-parser, dotenv, express, node-fetch, pg

Use this in your git:   npm i axios body-parser dotenv node-fetch pg


**Make a Directory in your VS Code:**

Real-Time Data Processing System for
Weather Monitoring with Rollups and Aggregates/
│
├── config/
│   └── config.js
│
├── node_modules
│
├── src/
│   ├── app.js
│   ├── controllers/
│   │   └── weatherController.js
│   ├── models/
│   │   └── weatherModel.js
│   ├── public/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   ├── routes/
│   │   └── weatherRoutes.js
│   ├── services/
│   │   └── weatherService.js
│   └──.env
│   |
│   └── db.js
|
├── .gitignore
├── package-lock.json
├── package.json
│
└── README.md

**After your coding**

run a nodemon src/app.js OR node src/app.js

![Screenshot (252)](https://github.com/user-attachments/assets/a184f199-5860-4779-bd9f-33e70e4525f6)

**NOTE:**

1. When your temprature is more then 35°C, 95°F or 308K. It triggered a alert messege. 
2. Make a Database in your pg admin name Weather.
3. Table name weather
4. Add a query in your pgadmin.   
