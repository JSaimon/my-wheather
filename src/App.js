import "./App.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { InfiniteSlider } from "./components/InfiniteSlider";
import { CityForm } from "./components/CityForm";
import { WeatherDisplay } from "./components/WeatherDisplay";
import { Footer } from "./components/Footer";

export default function App() {
  const [selectedWeather, setSelectedWeather] = useState("");

  function handleSelectedWeather(value) {
    setSelectedWeather((weather) => (weather = value));
  }
  return (
    <div className="App">
      <Header />
      <InfiniteSlider />
      <div className="city-weather">
        <CityForm
          onChangeSelectedWeather={handleSelectedWeather}
          weather={selectedWeather}
        />
        <WeatherDisplay weather={selectedWeather} />
      </div>
      <Footer />
    </div>
  );
}
