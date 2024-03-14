import "./form.css";

export default function Form({ onAddActivity }) {
  function onSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    // const data = Object.fromEntries(formData);
    // console.log(data);
    const name = formData.get("name")
    const isForGoodWeather = formData.get("weather")
    const emoji = formData.get("emoji")
    onAddActivity(name, isForGoodWeather == null ? false : true, emoji)

    // reset the fields
    event.target.reset()
    // focus on name
    document.getElementById("name").focus()
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
        <input id="emoji-input" list="emojis" maxLength="1" name="emoji"></input>
        <datalist id="emojis">
            {emojis.map((emoji) => (
              <option key={emoji} value={emoji} />
            ))}
          </datalist>
        <button id="submit-button" type="submit">Submit</button>
      </form>
    </>
  )
}

const emojis = [
  "🤠", 
  "🧖",
  "🤾‍♀️",
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
