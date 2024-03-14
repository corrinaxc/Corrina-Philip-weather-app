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
      <h2>Add new Activity:</h2>
      <form id="activityForm" onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" name="name"></input>
        <label htmlFor="isForGoodWeather">Good-weather Activity</label>
        <input id="isForGoodWeather" type="checkbox" name="weather"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
