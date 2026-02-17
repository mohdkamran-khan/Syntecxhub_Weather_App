import { useEffect, useState } from 'react';
import Highlights from './components/highlights'
import Temp from './components/temp'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [city, setCity] = useState("New Delhi")
  const [weatherData, setWeatherData] = useState(null)

  const apiURL = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_KEY}&q=${city}&aqi=yes`;

  useEffect(() => {
    fetch(apiURL)
    .then(res => {
      if(!res.ok){
        throw new Error("Error")
      }
      return res.json()
    })
    .then(data => {
      console.log(data)
      setWeatherData(data)
    })
    .catch(e => {
      console.log(e)
    })
  }, [city])

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-200 to-blue-500">
      <Header />
      <div className="w-full mx-auto max-w-6xl p-8 mb-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left Card */}
        <div className="bg-white/50 backdrop-blur-lg rounded-3xl shadow-2xl p-6 col-span-1">
          {weatherData ? (
            <Temp
              setCity={setCity}
              stats={{
                temp: weatherData.current.temp_c,
                condition: weatherData.current.condition.text,
                isDay: weatherData.current.is_day,
                location: weatherData.location.name,
                country: weatherData.location.country,
                time: weatherData.location.localtime,
                uv: weatherData.current.uv,
                feels: weatherData.current.feelslike_c,
                aqi: weatherData.current.air_quality.pm2_5,
              }}
            />
          ) : (
            <div className="text-white text-center text-lg">
              Loading Weather...
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="bg-white/50 backdrop-blur-lg rounded-3xl shadow-2xl p-8 col-span-2">
          <h2 className="text-slate-700 text-2xl font-bold mb-6">
            Today's Highlights
          </h2>

          {weatherData && (
            <div className="grid sm:grid-cols-2 gap-6">
              <Highlights
                stats={{
                  title: "Wind Status",
                  value: weatherData.current.wind_kph,
                  unit: "kph",
                  direction: weatherData.current.wind_dir,
                }}
              />

              <Highlights
                stats={{
                  title: "Humidity",
                  value: weatherData.current.humidity,
                  unit: "%",
                }}
              />

              <Highlights
                stats={{
                  title: "Visibility",
                  value: weatherData.current.vis_km,
                  unit: "km",
                }}
              />

              <Highlights
                stats={{
                  title: "Air Pressure",
                  value: weatherData.current.pressure_mb,
                  unit: "mb",
                }}
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
  
}

export default App
