import { useState, useEffect } from "react"

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
    <>
      {emoji}
      {temperature}
    </>
  )
}
