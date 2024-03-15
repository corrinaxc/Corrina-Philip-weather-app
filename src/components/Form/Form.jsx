import "./form.css";
import {forwardRef, useImperativeHandle, useState} from "react"

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
  const [name, setName] = useState('');
  const [isForGoodWeather, setIsForGoodWeather] = useState(false);
  const [emoji, setEmoji] = useState(emojis[0]);

  useImperativeHandle(ref, () => ({
    focusOnName,
  }));

  function focusOnName() {
    document.getElementById("name").focus()
  }

  function onSubmit(event) {
    event.preventDefault()
    props.onAddActivity(name, isForGoodWeather != null, emoji)

    setName('');
    setIsForGoodWeather(false);
    setEmoji(emojis[0]);
    focusOnName()
  }

  return (
    <>
      <form id="activity-form" onSubmit={onSubmit}>
        <h2>Add a New Activity:</h2>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} required></input>
        <label id="isForGoodWeather-label" htmlFor="isForGoodWeather">Good-weather Activity</label>
        <input id="isForGoodWeather" type="checkbox" name="weather" checked={isForGoodWeather} onChange={(e) => setIsForGoodWeather(e.target.checked)}></input>
        <label id="emoji-label" htmlFor="emojis-input">Emoji</label>
        <select id="emojis-input" name="emojis-input" value={emoji} onChange={(e) => setEmoji(e.target.value)}>
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