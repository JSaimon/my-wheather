import "../App.css";

export function InfoMessage({ city, date, weather }) {
  let message = "";
  switch (date) {
    case "yesterday":
      message = `Yesterday in ${city} was ${weather}`;
      break;
    case "today":
      message = `Today in ${city} is ${weather}`;
      break;
    default:
      message = `Tomorrow in ${city} will be ${weather}`;
      break;
  }
  return <p className="info-message">{message}</p>;
}
