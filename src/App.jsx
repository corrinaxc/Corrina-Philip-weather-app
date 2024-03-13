import { useState } from "react"
import "./App.css"
import Form from "./components/Form/Form.jsx"
import { uid } from "uid"
import List from "./components/Form/List/List.jsx"
import useLocalStorage from "./hooks/useLocalStorage.jsx"

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
  const [activities, setActivities] = useLocalStorage(
    "activities",
    initialActivities
  )
  const isForGoodWeather = true

  function filterActivities() {
    return activities.filter(
      (activity) => activity.isForGoodWeather == isForGoodWeather
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
      <List activites={filterActivities()} isGoodWeather={isForGoodWeather} />
      <Form onAddActivity={handleAddActivity} />
    </>
  )
}

export default App
