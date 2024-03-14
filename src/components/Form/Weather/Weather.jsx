import { useState, useEffect } from "react"
import "./weather.css";

const url = "https://example-apis.vercel.app/api/weather/"

export default function Weather({ isWeatherGood }) {
  const [emoji, setEmoji] = useState("")
  const [temperature, setTemperature] = useState("")

  async function loadWeather() {
    const response = await fetch(url)
    const data = await response.json()
    const isGoodWeather = data.isGoodWeather
    setEmoji(data.condition)
    setTemperature(data.temperature)
    isWeatherGood(isGoodWeather)
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
    <div id="weather-display">
      <span id="emoji">{emoji} </span>
      <span id="temperature">{temperature}°c</span>
    </div>
  )
}
