import './css/Card.css';

function Card(props) {
    return (
        <>
            <div className="card">
                <h1 className='card-name card-content'>{props.name}</h1>
                <div className='card-content'>{props.code}</div>
                <div className='card-content'><a className='card-content' href={props.url}>{props.url}</a></div>
            </div> 
        </>
    );
}

export default Card;