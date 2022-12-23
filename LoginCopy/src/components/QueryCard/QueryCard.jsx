import "./Card.css"
const QueryCard = (props) => {
    console.log(props);
    return (
        <>
            <div className="query_card" >
                <h2>{props.query}</h2>
                <p>{props.about}</p>
                <picture>
                    <img src={props.source} alt="monitor" />
                </picture>
            </div>
        </>
    )
}
export default QueryCard;