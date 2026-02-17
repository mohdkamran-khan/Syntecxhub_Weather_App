# 🌦️ Weather App

A dynamic weather application built using **React**, **Vite** and **Tailwind** that integrates with **WeatherAPI** to deliver real time weather data for any city worldwide. Implemented asynchronous data fetching using **REST API**, state management with hooks, and responsive UI components to ensure smooth performance across devices.

## 📌 Features

- Search weather by city name
- Current conditions including temperature, humidity, wind, AQI and weather condition
- Error handling for invalid input / API failures
- Responsive UI for mobile and desktop

## 🧱 Tech Stack

- **Frontend:** React (with Hooks & functional components)
- **Styling:** Tailwind
- **API:** WeatherAPI
- **State Management:** REST API

## 📸 Screenshots

![WeatherApp](https://github.com/user-attachments/assets/31ad4844-7321-4fe2-a695-71680b729717)

## 📁 Project Structure
```pgsql
Weather_App/
│
├── public/                     # Static files
│
├── src/
│   ├── assets/           
│   │
│   ├── components/             # Reusable UI components
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Highlights.jsx
│   │   └── Temp.jsx
│   │
│   ├── App.jsx                  # Root component
│   ├── index.css                # Global styles
│   └── Main.jsx                 # Entry point
│
├── .env                        # Environment variables
├── index.html                  # Main HTML file
├── package.json                # Project metadata & dependencies
├── package-lock.json
└── README.md
```

## Getting Started

### Prerequisites

- Node >= 14.x

### 🛠️ Installation

```bash
git clone https://github.com/mohdkamran-khan/Syntecxhub_Weather_App.git
cd Syntecxhub_Weather_App
```
### 1️⃣ Install dependencies:
```bash
npm install
```
### 2️⃣ Environment Variables

Create a `.env` file in the root with:
```env
VITE_WEATHER_KEY=YOUR_API_KEY
```
### 3️⃣ Run Locally
```bash
npm start
```
## 📧 Contributing

Contributions are welcome. If you want to contribute:

1. Fork the repo
2. Create a feature branch `git checkout -b feature/your-feature`
3. Commit your changes `git commit -m "feat: add ..."`
4. Push and open a pull request

## 📄 License

```
This project is open-source and available under the [MIT License]
```

## 👨🏻‍💻 Author

Mohd Kamran Khan | You can reach me at: [mohdkamrankhan.dev@gmail.com]

🌐 **Portfolio:** [mohdkamran-khan.github.io/KAMRAN-portfolio](https://mohdkamran-khan.github.io/KAMRAN-portfolio/)
