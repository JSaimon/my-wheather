import "../App.css";

export function CarouselItem({ weather }) {
  function GetWeatherIcon(selectedWeather) {
    let weatherIcon = "";

    switch (selectedWeather) {
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

    return weatherIcon;
  }

  return (
    <div className="carousel-card">
      <p className="sub-title">
        <span>{GetWeatherIcon(weather.weather.today)}</span>
        <span>{weather.city}</span>
      </p>
    </div>
  );
}
