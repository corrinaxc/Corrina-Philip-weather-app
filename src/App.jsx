import { useState } from "react"
import "./App.css"
import Form from "./components/Form/Form.jsx"
import { uid } from "uid"
import List from "./components/Form/List/List.jsx"
import useLocalStorage from "./hooks/useLocalStorage.jsx"

const initialActivities = [
  {
    id: uid(),
    name: "hello",
    isForGoodWeather: true,
  },
]

function App() {
  const [activities, setActivities] = useLocalStorage("activities", initialActivities)


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
      <List activites={ activities } />
      <Form onAddActivity={handleAddActivity} />
    </>

  )
}

export default App
