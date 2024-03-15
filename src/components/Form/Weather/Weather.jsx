import { useState, useEffect } from "react"
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

  const url = `https://example-apis.vercel.app/api/weather/${location}`

  async function loadWeather() {
    const response = await fetch(url)
    const data = await response.json()
    const isGoodWeather = data.isGoodWeather
    setEmoji(data.condition)
    setTemperature(data.temperature)
    isWeatherGood(isGoodWeather)
  }

  async function changeLocation(event) {
    setLocation(event.target.value)
    await loadWeather()
  }

  useEffect(() => {
    loadWeather()
    const timer = setInterval(() => {
      loadWeather()
    }, 5000)

    return () => {
      clearInterval(timer)
    }
  }, [])

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
