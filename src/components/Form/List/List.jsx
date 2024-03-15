import "./list.css";

export default function List({ activites, isGoodWeather, onDeleteActivity }) {
  return (
    <>
      <h1>
        {isGoodWeather === true
          ? "The Sun Has Got His Hat On"
          : "Bad Weather"}
      </h1>
      {activites.map(({ id, name, emoji }) => (
        <ul className="activity-list" key={id}>
          <li>
              {name} {emoji}
            <button id="delete-button" onClick={() => onDeleteActivity(id)}>Delete</button>
          </li>
        </ul>
      ))}
    </>
  )
}
