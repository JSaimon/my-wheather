import "../App.css";
import weatherData from "../data/weatherData.json";
import { CarouselItem } from "./CarouselItem";

export function InfiniteSlider() {
  const firstTenItems = weatherData.slice(9);
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {firstTenItems.map((weather) => {
          return (
            <CarouselItem weather={weather} key={weather.id}></CarouselItem>
          );
        })}
        {firstTenItems.map((weather) => {
          return (
            <CarouselItem weather={weather} key={weather.id}></CarouselItem>
          );
        })}
      </div>
    </div>
  );
}
