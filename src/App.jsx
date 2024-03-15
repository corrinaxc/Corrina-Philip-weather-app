import {useRef, useState} from "react"
import "./App.css"
import Form from "./components/Form/Form.jsx"
import { uid } from "uid"
import List from "./components/Form/List/List.jsx"
import useLocalStorage from "./hooks/useLocalStorage.jsx"
import Weather from "./components/Form/Weather/Weather.jsx"
//import "./components/Weather/weather.css"

const initialActivities = [
  {
    id: uid(),
    name: "drink (outdoor)",
    emoji: "🍻",
    isForGoodWeather: true,
  },
  {
    id: uid(),
    name: "drink (indoor)",
    emoji: "🍻",
    isForGoodWeather: false,
  },
  {
    id: uid(),
    name: "skateboard",
    emoji: "🛹",
    isForGoodWeather: true,
  },
  {
    id: uid(),
    name: "kayak",
    emoji: "🛶",
    isForGoodWeather: true,
  },
  {
    id: uid(),
    name: "stare wistfully out of the window",
    emoji: "😢",
    isForGoodWeather: false,
  },
  {
    id: uid(),
    name: "complain about the weather ",
    emoji: "🤬",
    isForGoodWeather: false,
  },
]

function App() {
  const [isWeatherGood, setIsWeatherGood] = useState(true)

  const childRef = useRef();

  const [activities, setActivities] = useLocalStorage(
    "activities",
    initialActivities
  )

  function filterActivities() {
    return activities.filter(
      (activity) => activity.isForGoodWeather === isWeatherGood
    )
  }

  function handleDeleteActivity(id) {
    // filter activities - return all besides the activity where activity.id = id
    const filteredResult = activities.filter((activity) => activity.id !== id)
    setActivities(filteredResult)
    if (childRef.current) {
      childRef.current.focusOnName();
    }
  }

  function handleAddActivity(name, isForGoodWeather, emoji) {
    setActivities([
      ...activities,
      {
        id: uid(),
        name: name,
        isForGoodWeather: isForGoodWeather,
        emoji: emoji,
      },
    ])
  }

  return (
    <>
      <Weather isWeatherGood={setIsWeatherGood} />
      <List
        activites={filterActivities()}
        isGoodWeather={isWeatherGood}
        onDeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity} ref={childRef}/>
    </>
  )
}

export default App
