export default function Form( { onAddActivity } ) {
    function onSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const name = formData.get("name");
        const isForGoodWeather = formData.get("weather").isChecked;
        console.log(name, isForGoodWeather);
        
    } 
    
    return(
        <>
        <h1>Add new Activity:</h1>
        <form id="activityForm" onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name"></input>
            <label htmlFor="isForGoodWeather">Good-weather Activity</label>
            <input id="isForGoodWeather" type="checkbox" name="weather"></input>
            <button type="submit">Submit</button>
        </form >
        </>
    )


}