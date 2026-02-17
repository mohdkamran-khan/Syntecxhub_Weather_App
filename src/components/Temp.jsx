import React, { useState } from "react";

function Temp({ setCity, stats }) {
  const [input, setInput] = useState(stats.location);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setCity(input.trim());
    }
  };

  return (
    <div className="text-white">
      {/* Search */}
      <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
        <input
          type="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search city..."
          className="flex-1 bg-white/30 backdrop-blur-md border border-white/40 
          placeholder-slate-500 text-slate-700 px-4 py-3 rounded-xl 
          focus:outline-none focus:ring-2 focus:ring-white/60 transition"
        />
        <button
          type="submit"
          className="bg-white/30 backdrop-blur-md px-4 rounded-xl 
          hover:bg-white/40 transition cursor-pointer hover:-translate-y-1"
        >
          🔍
        </button>
      </form>

      {/* Weather Icon */}
      <div className="flex justify-center mb-6">
        {stats.isDay === 1 ? (
          <div className="text-6xl">☀️</div>
        ) : (
          <div className="text-6xl">🌙</div>
        )}
      </div>

      {/* Temperature */}
      <div className="flex justify-center items-start mb-4 text-slate-800">
        <span className="text-7xl font-bold leading-none">{stats.temp}</span>
        <span className="text-3xl mt-2 ml-1 opacity-80">°C</span>
      </div>

      {/* Condition */}
      <p className="text-center text-xl font-medium mb-2 text-slate-800">
        {stats.condition} • AQI {stats.aqi}
      </p>

      <p className="text-center text-md opacity-80 mb-6 text-slate-800">
        Feels like {stats.feels}°C • UV Index {stats.uv}
      </p>

      {/* Location + Time */}
      <div className="border-t border-white/30 pt-2 text-center text-md opacity-80 text-slate-800">
        <p>{stats.time}</p>
        <p>
          {stats.location}, {stats.country}
        </p>
      </div>
    </div>
  );
}

export default Temp;
