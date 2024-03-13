

export default function List( { activites } ) {
    
    return(
        <>
        {activites.map(({id, name, isForGoodWeather}) => (
        <ul className="activity-list" key={id}>
            <li>{name}</li>
        </ul>
    ))}
     </>
    );
}