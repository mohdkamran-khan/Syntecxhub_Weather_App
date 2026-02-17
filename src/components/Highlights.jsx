import React from "react";

function Highlights({ stats }) {
  const isHumidity = stats.title === "Humidity";
  const isWind = stats.direction;

  return (
    <div
      className="bg-white/30 backdrop-blur-lg rounded-2xl p-6 
      shadow-lg text-slate-800 transition transform hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Title */}
      <p className="text-sm uppercase tracking-wide opacity-80 mb-3">
        {stats.title}
      </p>

      {/* Value */}
      <div className="flex items-end gap-2">
        <span className="text-4xl font-bold">{stats.value}</span>
        <span className="text-lg opacity-80 mb-1">{stats.unit}</span>
      </div>

      {/* Wind Direction */}
      {isWind && (
        <div className="mt-4 flex items-center gap-2 text-md opacity-80">
          <span className="text-xl">🧭</span>
          <span>{stats.direction}</span>
        </div>
      )}

      {/* Humidity Progress */}
      {isHumidity && (
        <div className="mt-5">
          <div className="w-full bg-white/20 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${stats.value}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Highlights;
