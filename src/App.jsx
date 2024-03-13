import { useState } from "react"
import "./App.css"
import Form from "./components/Form/Form.jsx"
import { uid } from "uid"

const initialActivities = [
  {
    id: uid(),
    name: "hello",
    isForGoodWeather: true,
  },
]

function App() {
  const [activities, setActivities] = useState(initialActivities)

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
      <Form onAddActivity={handleAddActivity} />
    </>
  )
}

export default App
