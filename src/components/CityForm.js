import "../App.css";
import { useState } from "react";
import weatherData from "../data/weatherData.json";
import { ErrorMessage } from "./ErrorMessage";
import { InfoMessage } from "./InfoMessage";

export function CityForm({ onChangeSelectedWeather, weather }) {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDate, setSelectedDate] = useState("today");
  const [cityExists, setCityExists] = useState(false);
  const [searched, setSearched] = useState(false);

  function handleSelectedCity(value) {
    setSelectedCity((city) => (city = value));

    let element = getSelectedElement(value);

    if (element) {
      handleCityExists(true);
    } else {
      handleCityExists(false);
    }

    if (value !== "") {
      handleSearched(true);
    } else {
      handleSearched(false);
    }

    onChangeSelectedWeather(element?.weather[selectedDate]);
  }

  function handleSelectedDate(value) {
    setSelectedDate((date) => (date = value));
    let element = getSelectedElement(selectedCity);
    onChangeSelectedWeather(element?.weather[value]);
  }

  function handleCityExists(value) {
    setCityExists((exists) => (exists = value));
  }

  function handleSearched(value) {
    setSearched((wasSearched) => (wasSearched = value));
  }

  function getSelectedElement(cityName) {
    let element;
    for (let el of weatherData) {
      if (el.city === cityName) {
        element = el;
        break;
      }
    }
    return element;
  }

  return (
    <div className="city-form">
      {searched && !cityExists && <ErrorMessage city={selectedCity} />}
      <form onSubmit={(event) => event.preventDefault()}>
        <p className="form-row">
          <label>🌆 Choose a city</label>
          <input
            type="text"
            value={selectedCity}
            onChange={(event) => handleSelectedCity(event.target.value)}
          />
        </p>
        <p className="form-row">
          <label>📅 Choose a date</label>
          <select
            value={selectedDate}
            onChange={(event) => handleSelectedDate(event.target.value)}
          >
            <option value="yesterday">Yesterday</option>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
          </select>
        </p>
      </form>
      {searched && cityExists && (
        <InfoMessage
          city={selectedCity}
          date={selectedDate}
          weather={weather}
        />
      )}
    </div>
  );
}
