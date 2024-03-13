export default function Form( { onAddActivity } ) {
    return(
        <>
        <h1>Add new Activity:</h1>
        <form>
            <label htmlFor="name">Name</label>
            <input id="name" type="text"></input>
            <label htmlFor="isForGoodWeather">Good-weather Activity</label>
            <input id="isForGoodWeather" type="checkbox"></input>
            <button type="submit">Submit</button>
        </form>
        </>
    )


}