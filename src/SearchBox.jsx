import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({ updateInfo }) {  // ✅ Receive updateInfo from parent
  let [city, setCity] = useState("");
  let [error,setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "7f126eceda3033da0cf31abaf1fe5195";

  let getWeatherInfo = async () => {
    try {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    let jsonResponse = await response.json();

    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    return result;
  } catch (err){
    setError("City not found.");
    throw err;
  }
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    try {
    e.preventDefault();
    let newinfo = await getWeatherInfo();
    updateInfo(newinfo); // ✅ Pass the result to parent
    setCity("");         // ✅ Clear input after search
    } catch(err) {
      setError(true);
    }
    
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color: "red"}}>No such place exists!</p>}
      </form>
    </div>
  );
}
