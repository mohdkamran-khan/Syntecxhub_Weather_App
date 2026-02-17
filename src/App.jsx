import { useEffect, useState } from 'react';
import Highlights from './components/highlights'
import Temp from './components/temp'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [city, setCity] = useState("New Delhi")
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiURL = `https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_KEY}&q=${city}&aqi=yes`;

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(apiURL);

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data?.error?.message || "Failed to fetch weather");
        }

        setWeatherData(data);
      } catch (err) {
        setWeatherData(null);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return (
    <div className="min-h-[100dvh] flex flex-col bg-linear-to-br from-blue-200 to-blue-500">
      <Header />
      <div className="flex-1 w-full mx-auto max-w-6xl p-8 mb-8 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Left Card */}
        <div className="bg-white/50 backdrop-blur-lg rounded-3xl shadow-2xl p-6 col-span-1">
          {loading && (
            <div className="text-center text-slate-800">Loading weather...</div>
          )}

          {error && (
            <div className="text-center text-red-600 font-medium">{error}</div>
          )}

          {!loading && !error && weatherData && (
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
