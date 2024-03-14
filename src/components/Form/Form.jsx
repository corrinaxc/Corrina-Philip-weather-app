import "./form.css";

export default function Form({ onAddActivity }) {
  function onSubmit(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const name = formData.get("name")
    const isForGoodWeather = formData.get("weather")
    onAddActivity(name, isForGoodWeather == null ? false : true)

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
        <button id="submit-button" type="submit">Submit</button>
      </form>
    </>
  )
}
