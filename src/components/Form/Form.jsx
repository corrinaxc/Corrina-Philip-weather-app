import "./form.css";
import {forwardRef, useImperativeHandle} from "react"

const emojis = [
  "👀",
  "🤠",
  "🧖",
  "🤾‍",
  "♀️",
  "🍾",
  "🎢",
  "🥊",
  "🐶",
  "🐱",
  "🐭",
  "🐹",
  "🐰",
  "🦊",
  "🐻",
  "🐼",
  "🐨",
  "🐯",
  "🦁",
  "🐮",
  "🐷",
  "🐸",
  "🐵",
  "🐔",
  "🐧",
  "🐦",
  "🐤",
  "🐣",
  "🐥",
  "🦆",
  "🦅",
  "🦉",
  "🦇",
  "🐺",
  "🐗",
  "🐴",
  "🦄",
  "🐝",
  "🪱",
  "🐛",
  "🦋",
  "🐌",
  "🐞",
  "🐜",
  "🪰",
  "🪲",
  "🪳",
  "🐢",
  "🐍",
  "🦎",
  "🦖",
  "🦕",
  "🐙",
  "🦑",
  "🦐",
  "🦞",
  "🦀",
  "🐡",
  "🐠",
  "🐟",
  "🐬",
  "🐳",
  "🐋",
  "🦈",
  "🐊",
  "🐅",
  "🐆",
  "🦓",
  "🦍",
  "🦧",
  "🦣",
  "🦛",
  "🐘",
  "🦏",
  "🐪",
  "🐫",
  "🦒",
  "🦘",
  "🦙",
  "🦥",
  "🦨",
  "🦡",
  "🦦",
  "🦔",
  "🐻‍❄️",
]

const Form = forwardRef((props, ref) => {

  useImperativeHandle(ref, () => ({
    focusOnName,
  }));

  function focusOnName() {
    document.getElementById("name").focus()
  }


  function onSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const name = formData.get("name")
    const isForGoodWeather = formData.get("weather")
    const emoji = formData.get("emoji")
    props.onAddActivity(name, isForGoodWeather != null, emoji)

    event.target.reset()
    focusOnName()
  }

  return (
    <>
      <form id="activity-form" onSubmit={onSubmit}>
        <h2>Add a New Activity:</h2>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" required></input>
        <label id="isForGoodWeather-label" htmlFor="isForGoodWeather">Good-weather Activity</label>
        <input id="isForGoodWeather" type="checkbox" name="weather"></input>
        <label id="emoji-label" htmlFor="emoji">Emoji</label>
        <select id="emojis" name="emoji">
          {emojis.map((emoji) => (
            <option key={emoji} value={emoji}>{emoji}</option>
          ))}
        </select>
        <button id="submit-button" type="submit">Submit</button>
      </form>
    </>
  )
})

export default Form