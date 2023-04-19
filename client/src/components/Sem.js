import { Link } from 'react-router-dom';
import './css/Sem.css';

function Sem() {

    const arr = [];
    for (let i = 0; i <= 8; i++) {
        arr.push(<Link to={`/sem/${i}`}>
            <div className='list'>Semester: {i}</div>
        </Link>)
    }
    console.log(arr);

    return (
        <div className='container'>
            {arr};
        </div>
    );
}

export default Sem; 