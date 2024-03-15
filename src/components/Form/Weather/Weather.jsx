import {useState, useEffect, useRef} from "react"
import "./weather.css";
import useLocalStorage from "../../../hooks/useLocalStorage.jsx"

const locations = {
  europe: "europe",
  arctic: "arctic",
  sahara: "sahara",
  rainforest: "rainforest"
}


export default function Weather({ isWeatherGood }) {
  const [emoji, setEmoji] = useState("")
  const [temperature, setTemperature] = useState("")
  const [location, setLocation] = useLocalStorage("location", locations.europe);

  const urlRef= useRef(`https://example-apis.vercel.app/api/weather/${location}`)
  const intervalRef = useRef(null);

  async function loadWeather(_url = urlRef.current) {
    const response = await fetch(_url)
    const data = await response.json()
    const isGoodWeather = data.isGoodWeather
    setEmoji(data.condition)
    setTemperature(data.temperature)
    isWeatherGood(isGoodWeather)
  }

  async function changeLocation(event) {
    const newLocation = event.target.value;
    setLocation(newLocation);
    const newUrl = `https://example-apis.vercel.app/api/weather/${newLocation}`;
    urlRef.current = newUrl;
    await loadWeather(newUrl);
  }

  useEffect(() => {
    loadWeather();
    clearInterval(intervalRef.current);

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    const intervalId = setInterval(loadWeather,4000);
    intervalRef.current = intervalId;

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div id="weather-display">
        <span id="emoji">{emoji} </span>
        <span id="temperature">{temperature}°c</span>
      </div>
      <div>
        <select id="location" name="location" value={location} onChange={changeLocation}>
          {Object.keys(locations).map((key) => (
            <option key={key} value={locations[key]}>
              {locations[key]}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}
