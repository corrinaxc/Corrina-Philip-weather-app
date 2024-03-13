import { useState } from "react"
import "./App.css"
import Form from "./components/Form/Form.jsx"
import { uid } from "uid"
import List from "./components/Form/List/List.jsx"
import useLocalStorage from "./hooks/useLocalStorage.jsx"
import Weather from "./components/Form/Weather/Weather.jsx"

const initialActivities = [
  {
    id: uid(),
    name: "good",
    isForGoodWeather: true,
  },
  {
    id: uid(),
    name: "bad",
    isForGoodWeather: false,
  },
]

function App() {
  const [isWeatherGood, setIsWeatherGood] = useState(true)

  const [activities, setActivities] = useLocalStorage(
    "activities",
    initialActivities
  )

  function filterActivities() {
    return activities.filter(
      (activity) => activity.isForGoodWeather == isWeatherGood
    )
  }

  function handleAddActivity(name, isForGoodWeather) {
    setActivities([
      ...activities,
      {
        id: uid(),
        name: name,
        isForGoodWeather: isForGoodWeather,
      },
    ])
  }

  return (
    <>
      <Weather isWeatherGood={setIsWeatherGood} />
      <List activites={filterActivities()} isGoodWeather={isWeatherGood} />
      <Form onAddActivity={handleAddActivity} />
    </>
  )
}

export default App
