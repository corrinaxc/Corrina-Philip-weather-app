export default function List({ activites, isGoodWeather }) {
  return (
    <>
      <h1>
        {isGoodWeather === true
          ? "the sun has got his hat on, and so should you"
          : "bad weather"}
      </h1>
      {activites.map(({ id, name }) => (
        <ul className="activity-list" key={id}>
          <li>{name}</li>
        </ul>
      ))}
    </>
  )
}
