import "../App.css";

export function ErrorMessage({ city }) {
  return (
    <p className="error-message">{city} wasn't found. Try another city!</p>
  );
}
