function backgroundClass(conditionCode) {
  const bgClasses = {
    1000: 'bg-amber-300/40', // Sunny
    1003: 'bg-slate-300/40', // Partly cloudy
    1006: 'bg-slate-500/40', // Cloudy
    1009: 'bg-slate-800/40', // Overcast
    1030: 'bg-slate-200/40', // Mist
    1063: 'bg-blue-300/40', // Patchy rain possible
    1066: 'bg-blue-300/40', // Patchy snow possible
    1069: 'bg-blue-300/40', // Patchy sleet possible
    1072: 'bg-blue-300/40', // Patchy freezing drizzle possible
    1087: 'bg-violet-800/40', // Thundery outbreaks possible
    1114: 'bg-blue-500/40', // Blowing snow
    1117: 'bg-blue-700/40', // Blizzard
    1135: 'bg-slate-300/40', // Fog
    1147: 'bg-slate-500/40', // Freezing fog
    1150: 'bg-blue-300/40', // Patchy light drizzle
    1153: 'bg-blue-300/40', // Light drizzle
    1168: 'bg-blue-500/40', // Freezing drizzle
    1171: 'bg-blue-900/40', // Heavy freezing drizzle
    1180: 'bg-blue-300/40', // Patchy light rain
    1183: 'bg-blue-300/40', // Light rain
    1186: 'bg-blue-600/40', // Moderate rain at times
    1189: 'bg-blue-600/40', // Moderate rain
    1192: 'bg-blue-900/40', // Heavy rain at times
    1195: 'bg-blue-900/40', // Heavy rain
    1198: 'bg-blue-300/40', // Light freezing rain
    1201: 'bg-blue-700/40', // Moderate or heavy freezing rain
    1204: 'bg-blue-300/40', // Light sleet
    1207: 'bg-blue-700/40', // Moderate or heavy sleet
    1210: 'bg-blue-300/40', // Patchy light snow
    1213: 'bg-blue-300/40', // Light snow
    1216: 'bg-blue-600/40', // Patchy moderate snow
    1219: 'bg-blue-600/40', // Moderate snow
    1222: 'bg-blue-900/40', // Patchy heavy snow
    1225: 'bg-blue-900/40', // Heavy snow
    1237: 'bg-blue-600/40', // Ice pellets
    1240: 'bg-blue-300/40', // Light rain shower
    1243: 'bg-blue-700/40', // Moderate or heavy rain shower
    1246: 'bg-blue-900/40', // Torrential rain shower
    1249: 'bg-blue-300/40', // Light sleet showers
    1252: 'bg-blue-700/40', // Moderate or heavy sleet showers
    1255: 'bg-blue-300/40', // Light snow showers
    1258: 'bg-blue-700/40', // Moderate or heavy snow showers
    1261: 'bg-blue-300/40', // Light showers of ice pellets
    1264: 'bg-blue-700/40', // Moderate or heavy showers of ice pellets
    1273: 'bg-violet-400/40', // Patchy light rain with thunder
    1276: 'bg-violet-800/40', // Moderate or heavy rain with thunder
    1279: 'bg-violet-400/40', // Patchy light snow with thunder
    1282: 'bg-violet-800/40', // Moderate or heavy snow with thunder
  };

  return bgClasses[conditionCode] || 'bg-white';
}

export default function updateDailyForecastDataPoint({
  day,
  dataPoint,
  conditionCode,
  text,
  notes = '',
}) {
  const forecastData = document.getElementById(`${dataPoint}-data-${day}`);
  forecastData.textContent = text;

  if (conditionCode) {
    const forecastContainer = document.getElementById(`forecast-${day}`);

    // removes previous background color
    Array.from(forecastContainer.classList).forEach((element) => {
      if (element.startsWith('bg-')) {
        forecastContainer.classList.remove(element);
      }
    });

    // adds new background color
    forecastContainer.classList.add(backgroundClass(conditionCode));
  }

  const forecastNotes = document.getElementById(`${dataPoint}-notes-${day}`);
  forecastNotes.textContent = notes;

  if (notes === '') forecastNotes.classList.add('hidden');
  else forecastNotes.classList.remove('hidden');
}
