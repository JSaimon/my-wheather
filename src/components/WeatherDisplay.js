import "../App.css";

export function WeatherDisplay({ weather }) {
  let weatherIcon = "";
  switch (weather) {
    case "cloudy":
      weatherIcon = "☁";
      break;
    case "raining":
      weatherIcon = "🌧";
      break;
    case "snowing":
      weatherIcon = "❄";
      break;
    case "foggy":
      weatherIcon = "🌫";
      break;
    default:
      weatherIcon = "☀";
      break;
  }
  return (
    <div className="weather-display">
      <h2>{weatherIcon}</h2>
    </div>
  );
}
